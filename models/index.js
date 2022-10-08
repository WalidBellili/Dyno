const { Sequelize } = require("sequelize");

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connected to db ${sequelize.config.database}`);
  } catch (e) {
    console.log(e);
  }
};
connectDB();

const Dynosaur = require("./dynosaur")(sequelize);
sequelize.sync({ alter: true });

module.exports = {
  sequelize,
  Dynosaur,
};
