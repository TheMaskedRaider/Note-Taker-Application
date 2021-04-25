const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//initialize app and create port
const app = express();
const PORT = process.env.PORT || 8080;

//set up parsing static and middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//starts the server on chosen PORT and declares the port that is being listend to
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
