const fs = require('fs');
for (const file of ['01-logo.svg', '02-logo-dark.svg']) {
    const path = 'assets/img/' + file;
    if (fs.existsSync(path)) {
        let text = fs.readFileSync(path, 'utf8');
        
        // This regex will replace any variation of Psic...loga (even with weird unicode replacement chars)
        text = text.replace(/Psic.*?loga/g, 'Psicóloga');
        
        fs.writeFileSync(path, text, 'utf8');
        console.log('Fixed ' + file);
    }
}
