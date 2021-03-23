const chalk = require("chalk");
const log = console.log;
const checkNumber = require("./utils/checkNumber");

const checkSingle = async (page, phoneNumber) => {
	log(chalk.blue(`Checking for Existence : ${phoneNumber}`));
	const numberExists = await checkNumber(page, phoneNumber);
	if (numberExists) log(chalk.green.bold("Number Exists on Whatsapp"));
	else log(chalk.red.bold("Number doesn't exist on Whatsapp"));

	return numberExists
}

module.exports = checkSingle
