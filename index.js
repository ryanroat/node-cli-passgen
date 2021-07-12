/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import program from 'commander';
import chalk from 'chalk';
import clipboardy from 'clipboardy';
import createPassword from './utils/createPassword.js';
import savePassword from './utils/savePassword.js';

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

// optionally save new password to file

if (save) {
  savePassword(newPassword);
}

// copy new password to clipboard

clipboardy.writeSync(newPassword);

// output new password

console.log(chalk.blue('Generated Password: ') + chalk.bold(newPassword));
console.log(chalk.yellowBright('Password copied to clipboard.'));
