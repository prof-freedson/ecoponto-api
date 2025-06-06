const express = require('express');
const bodyParser = require('body-parser');
const ecopontoRoutes = require('./routes/ecopontoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/ecopontos', ecopontoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});