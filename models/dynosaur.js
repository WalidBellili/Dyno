const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");

module.exports = sequelize => {
  const Dynosaur = sequelize.define("Dynosaur", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scienticName: {
      type: DataTypes.STRING,
    },
    yearOfApparition: {
      type: DataTypes.INTEGER,
    },
    yearOfdisparition: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    color: {
      type: DataTypes.STRING,
      default: "green",
    },
  });

  return Dynosaur;
};
