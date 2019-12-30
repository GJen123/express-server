const yargs = require('yargs');
const app = require('./app');

const { argv } = yargs;
const PORT = argv.port || '5487';

app.listen(PORT, () => {
    console.log('Server start, listening port', PORT);
});
