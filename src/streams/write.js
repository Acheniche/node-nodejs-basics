import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, './files/fileToWrite.txt');

const write = async () => {
    const stream = fs.createWriteStream(filePath);

    console.log('Enter...');
    process.stdin.on('data', (data) => {
        stream.write(data);
        console.log('Done.');
        process.exit();
    })
};

await write();