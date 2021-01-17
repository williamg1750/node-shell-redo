const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const [command, arg] = cmd.split(' ');
  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    // case command:
    //   cat(arg);
    //   break;
    default:
      process.stdout.write('not a command');
      process.stdout.write('\nprompt > ');
  }
  // process.stdout.write('\nprompt > ');
});
