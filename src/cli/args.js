const parseArgs = () => {
    const argv = process.argv;

    for (let i = 0; i < argv.length; i += 2) {
        console.log(`${argv[i].substring(2)} is ${argv[i + 1]}`);
    }
};

parseArgs();