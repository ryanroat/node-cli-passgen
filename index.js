/* eslint-disable linebreak-style */
import { program } from 'commander/esm.mjs';

program.version('1.0.0').description('Simple Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove sumbols')
  .option('-s, --save', 'save password to passwords.txt')
  .parse();

console.log(program.opts());
