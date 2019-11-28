const fs = require('fs');
fs.readFile("./starter/txt/start.txt", "UTF-8", (err, data) => {
    fs.readFile(`./starter/txt/${data}.txt`, "UTF-8", (err, data1) => {
        fs.readFile("./starter/txt/append.txt", "UTF-8", (err, data2) => {
            fs.writeFile("./starter/txt/final.txt", `${data1}\n${data2}`, 'UTF-8', (err) => {
                console.log("File is Written!");
            });
        });
    });
});
