import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputFilePath = path.join(__dirname, './files/fileToRemove.txt'); 
const error = 'FS operation failed';

const remove = async () => {
    fs.unlink(inputFilePath)
    .then(() => console.log('Successfully deleted!'))
    .catch(() => {throw new Error(error)});
};

await remove();