import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputFilePath = path.join(__dirname, './files/wrongFilename.txt');
const outputFilePath = path.join(__dirname, './files/properFilename.md');
const error = 'FS operation failed';

const rename = async () => {
    fs.rename(inputFilePath, outputFilePath)
    .then(() => console.log('Successfully renamed!'))
    .catch(() => {throw new Error(error)});
};

await rename();