const path = require('path');

module.exports = app => {
    app.get('/test', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
        res.send('Working')
    })
}
