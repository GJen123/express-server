const argv = require('yargs').argv;
const app = require('./app');
const PORT = argv.port || '5487';

app.listen(PORT, () => {
    console.log('Server start, listening port', PORT);
});