// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// const {sequelize} = require('./models');
const config = require('./config/config');
const app = express();
const PORT = process.env.PORT || 8081;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

// sequelize.sync()
//   .then(() => {
//     app.listen(config.port);
//     console.log(`Server started on port ${config.port}`);
//   });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});