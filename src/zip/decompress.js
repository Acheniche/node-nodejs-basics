import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Zlib from 'zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const inputStream = fs.createReadStream(path.join(__dirname, './files/archive.gz'));
    const outputStream = fs.createWriteStream(path.join(__dirname, './files/fileToCompress.txt'));
    inputStream.pipe(Zlib.createUnzip()).pipe(outputStream);
};

await decompress();