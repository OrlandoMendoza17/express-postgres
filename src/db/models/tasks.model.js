const { Model, DataTypes, Sequelize } = require("sequelize");

const TASKS_TABLE = "tasks"

const TasksSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  completed: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  }
}

class Tasks extends Model {
  static config(sequelize){
    return{
      sequelize,
      tableName: TASKS_TABLE,
      modelName: "Tasks",
      timestamps: false,
    }
  }
}

module.exports = { Tasks, TasksSchema, TASKS_TABLE }