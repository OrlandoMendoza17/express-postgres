const { Model, DataTypes, Sequelize } = require("sequelize")

const NEWS_STABLE = "news"

const NewSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  content: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  // createdAt: {
  //   allowNull: false,
  //   type: DataTypes.DATE,
  //   field: "create_at",
  //   defaultValue: Sequelize.NOW
  // }
}

class News extends Model{
  static associate() {

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: NEWS_STABLE,
      modelName: "News",
      timestamps: false,
    }
  }
}

module.exports = { NewSchema, NEWS_STABLE, News }