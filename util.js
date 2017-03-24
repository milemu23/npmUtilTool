const chalk = require('chalk');

exports.debug = (title, obj, status) => {
  if (process.env.DEBUG === 'true') {
    const seperator = '\n==================================\n';
    const output = seperator + title + seperator;

    const error = chalk.bold.red;
    const success = chalk.bold.green;
    const warn = chalk.bold.yellow;

    if (!status) {
      status = 'There is no status';
    }

    switch (status) {
      case 'error!':
      case 'error':
      case 'err':
        console.error(error(output), obj, status);
        break;
      case 'success!':
      case 'success':
        console.log(success(output), obj, status);
        break;
      case 'warning!':
      case 'warn':
      case 'warning':
        console.warn(warn(output), obj, status);
        break;
    }
  }
};
