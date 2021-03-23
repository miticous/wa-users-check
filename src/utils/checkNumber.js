
async function checkNumber(page, phoneNumber) {

	await page.goto(
		`https://web.whatsapp.com/send?phone=+55${phoneNumber}&text&app_absent=0`,
		{ waitUntil: "networkidle0" }
	);
	await page.waitForNavigation({
		waitUntil: "networkidle2",
	});
	await new Promise(r => setTimeout(r, 1000)); // Wait for page load - added for cases where networkidle doesn't
	let numberExists = false;
	if ((await page.$("#main")) !== null) numberExists = true;

	return numberExists;
}

module.exports = checkNumber;
