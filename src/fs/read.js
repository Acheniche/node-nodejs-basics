import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputFilePath = path.join(__dirname, './files/fileToRead.txt');
const error = 'FS operation failed';

const read = async () => {
    fs.readFile(inputFilePath)
    .then((text) => console.log(text.toString()))
    .catch(() => {throw new Error(error)});
};

await read();