import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, './files/fileToRead.txt');

const read = async () => {
    let arr = [];
    const stream = fs.createReadStream(filePath);

    stream.on('data' , (data) => {
        arr.push(data.toString());
    })

    stream.on('end', () => process.stdout.write(arr.join('')));
};

await read();