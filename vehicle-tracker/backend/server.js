const express = require('express');
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000; // Changed the port number to 4000

app.use(express.json());

app.use('/api/drivers', require('./routes/driverRoutes'));
app.use('/api/vehicles', require('./routes/vehicleRoutes'));
app.use('/api/transfers', require('./routes/transferRoutes'));

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
