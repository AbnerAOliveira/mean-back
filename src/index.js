const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000, () => {
    console.log('Application running in port 3000! Chamaa');
});

require('./controllers/authController')(app);



