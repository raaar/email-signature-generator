const juice = require('juice');
const path = require('path');
const fs = require('fs');
var minify = require('html-minifier').minify;

const cssFileError = () => {
    console.log('ERROR: \'email.css\' file not found. Try run \'npm run build\'');
    process.exit();
};
const cssContents = fs.readFileSync('./public/styles/email.css', 'utf-8', cssFileError);
const juiceOptions = { extraCss: cssContents };

try {

    const src = `./public/templates/signature-dev.html`;
    const dest = `./public/dest/signature-prod.html`;
    const destDir = path.dirname(dest);
    const fileContents = fs.readFileSync(src, 'utf-8');

    const minifySrc = minify(fileContents, {
        collapseWhitespace: true
    });

    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    fs.writeFileSync(dest, juice(minifySrc, juiceOptions), 'utf-8');

    console.log(`JUICE: '${src}' Email juice complete`);
} catch (err) {
    return console.log(`JUICE ERROR: ${err.message || err}`);
}