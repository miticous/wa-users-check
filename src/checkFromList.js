const chalk = require("chalk");
const puppeteer = require('puppeteer')
const checkSingle = require('./check');
const getNumbersFromFile = require('./utils/getNumbersFromFile');
const addVerifiedNumber = require('./utils/addVerifiedNumber');

const log = console.log;

const start = async () => {
    if (process.argv.length < 4) {
		log(chalk.red.bold("No file path referenced -> model: npm run checkList PATH_TO_READ_FILE PATH_TO_WRITE_RESULTS"));
		log(chalk.blue("Example: npm run checkList read.txt write.txt"));
		process.exit(0);
	}

    const path_to_read_file = process.argv[2];
    const path_to_write_file = process.argv[3];

    const browser = await puppeteer.launch({
        headless: true,
        userDataDir: "./profileData",
    });

    const page = await browser.newPage();

    await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
    );

    try {  
        const data = getNumbersFromFile(path_to_read_file);

        for(let i = 0; i < data.length; i+= 1) {
            const hasWhatsapp = await checkSingle(page, data[i])

            await addVerifiedNumber(path_to_write_file, data[i], hasWhatsapp);
        }

        return browser.close();

        
    } catch(e) {
        console.log('Error:', e.stack);
		log(chalk.red.bold("Causes: \n -> You aren't logged in.\n -> Your phone has no connection.\n -> An error occur during testing phone"));
    }
}

start()