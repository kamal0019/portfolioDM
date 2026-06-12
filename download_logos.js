const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = {
  'python.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/512px-Python-logo-notext.svg.png',
  'powerbi.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/512px-New_Power_BI_Logo.svg.png',
  'excel.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png'
};

const dir = path.join(__dirname, 'public', 'images');

for (const [filename, url] of Object.entries(urls)) {
  const dest = path.join(dir, filename);
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
}
