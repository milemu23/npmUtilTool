const chalk = require('chalk');

exports.bump = (currentVer, typeofIncrement) => {
  // major [0]
  // minor [1]
  // patch [2]
  const aryVers = currentVer.split('.');

  for (var i in aryVers) {
    aryVers[i] = parseInt(aryVers[i], 10);
  }

  if (typeofIncrement === 'patch') {
    aryVers[2] += 1;
  } else if (typeofIncrement === 'minor') {
    aryVers[2] = 0;
    aryVers[1] += 1;
  } else if (typeofIncrement === 'major') {
    aryVers[2] = 0;
    aryVers[1] = 0;
    aryVers[0] += 1;
  }
  return aryVers.join('.');
};


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
        console.log(success(output));
        break;
      case 'warning!':
      case 'warn':
      case 'warning':
        console.warn(warn(output));
        break;
    }
  }
};
