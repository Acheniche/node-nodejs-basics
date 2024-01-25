import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
    const cores = os.cpus().length;
    const promises = [];

    for(let i = 0; i < cores; i++) {
        const promise = new Promise((resolve) => {
            const worker = new Worker(path.join(__dirname, 'worker.js'), {
                workerData: 10 + i,
            });
            worker.on('message', resolve);
            worker.on('error', () => 
            resolve({
                status: 'error',
                data: null,
            }))
        })
        promises.push(promise)
    }
    Promise.all(promises).then((res) => console.log(res));
};

await performCalculations();