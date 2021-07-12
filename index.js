/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { program } from 'commander/esm.mjs';
import createPassword from './utils/createPassword.js';

program.version('1.0.0').description('Simple Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove sumbols')
  .option('-s, --save', 'save password to passwords.txt')
  .parse();

const {
  length, save, numbers, symbols,
} = program.opts();

// get new password with options

const newPassword = createPassword(length, numbers, symbols);

// output new password

console.log(newPassword);
