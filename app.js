import express from 'express'
const app = express();

app.get('/', (req, res, next) => {
    console.log('get');
    res.send('Hello World 1');
});
app.listen(8080);

