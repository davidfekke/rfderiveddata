const {Command, flags} = require('@oclif/command');
const { exec } = require("child_process");

class RfderiveddataCommand extends Command {
  async run() {
    exec("rm -rf ~/Library/Developer/xcode/DerivedData", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    this.log(`Deleting DerivedData folder`);
  }
}

RfderiveddataCommand.description = `This will removed the DerivedData folder used by xcode allowing a reset
...
This will removed the DerivedData folder used by xcode 
`

RfderiveddataCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = RfderiveddataCommand
