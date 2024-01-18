import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputFilePath = path.join(__dirname, './files');
const outputFilePath = path.join(__dirname, './files_copy');
const error = 'FS operation failed';

const copy = async () => {
    fs.readdir(inputFilePath).then((files) => {
        fs.mkdir(outputFilePath).then(() => {
            files.forEach((element) => {
                const input = inputFilePath + '/' + element;
                const output = outputFilePath + '/' + element;
                fs.copyFile(input, output)
                .catch(() => {throw new Error(error)});
            });
        })
        .catch(() => {throw new Error(error)})
        .finally(() => console.log('Successfully copied!'))
    })
};

await copy();
