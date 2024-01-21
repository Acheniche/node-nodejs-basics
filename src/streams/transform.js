import { Transform } from 'stream';

const reverse = new Transform({
    transform(chunk, encoding, callback) {
        const text = chunk.toString().split('').reverse().join('');
        callback(null, text);
    }
})

const transform = async () => {
    console.log('Enter text...');
    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();