import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputFilePath = path.join(__dirname, './files');
const error = 'FS operation failed';

const list = async () => {
    fs.readdir(inputFilePath)
    .then((files) => console.log(files))
    .catch(() => {throw new Error(error)});
};

await list();