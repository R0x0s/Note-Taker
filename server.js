// Require Dependencies
const express = require("express");
//Require routes file
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Require routes file
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// Setup listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});  