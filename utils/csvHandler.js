const fs = require('fs');


function importCsv(path){
    const rawData = fs.readFileSync(path, 'utf8');
    const data = rawData.split('\r\n');
    return data
}

function uploadCsv(req,res){
    var today = new Date();
    var date = today.getDate();
    var tempPath = req.files.file.path,
    targetPath = path.resolve('./uploads/'+req.files.file.originalFilename);
    if (path.extname(req.files.file.name).toLowerCase() === '.csv') {
        fs.rename(tempPath, '../uploads/csv_1', function(err) {
            if (err) throw err;
        });
    }
}

module.exports = {
    importCsv,
    uploadCsv
}