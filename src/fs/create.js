import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files' , 'fresh.txt');
const text = 'I am fresh and young';
const error = 'FS operation failed';

const create = async () => {
    fs.writeFile(filePath, text, {flag: 'wx'})
    .then(() => console.log('File create!'))
    .catch(() => {
        throw new Error(error);
    });
};

await create();