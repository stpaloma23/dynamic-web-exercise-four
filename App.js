const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hello world")
});
app.use('/images', express.static('public'));
app.listen(port, () => console.log('slay its working'));