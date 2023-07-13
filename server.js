// dependencies & port
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// express middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// routes
require('./routes/api')(app);
require('./routes/html')(app);

app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT} 🚀`);
});