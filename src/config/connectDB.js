const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('learnweb', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});
let connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Ket noi den database thanh cong.');
      } catch (error) {
        console.error('Ket noi that bai:', error);
      }
}

module.exports = connectDB;