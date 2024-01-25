import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Zlib from 'zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const inputStream = fs.createReadStream(path.join(__dirname, './files/fileToCompress.txt'));
    const outputStream = fs.createWriteStream(path.join(__dirname, './files/archive.gz'));
    inputStream.pipe(Zlib.createGzip()).pipe(outputStream);
};

await compress();