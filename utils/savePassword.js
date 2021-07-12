/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import os from 'os';
import chalk from 'chalk';

const savePassword = (password) => {
  const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(3);
  fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (error, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.greenBright('Password saved to passwords.txt'));
      });
    });
  });
};

export { savePassword as default };
