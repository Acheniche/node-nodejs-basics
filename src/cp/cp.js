import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    const child = fork(path.join(__dirname, './files/script.js'), [...args]);
    child.on("message", (data) => {console.log(data);});  
    child.on("close", function (code) {
      console.log("child process exited with code " + code);
    });
};

spawnChildProcess( ['someArgument1', 'someArgument2', 'someArgument3'] );
