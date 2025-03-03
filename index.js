const express = require('express');
const app = express();
const port = 3000;

// Serving Static Files with Express
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});