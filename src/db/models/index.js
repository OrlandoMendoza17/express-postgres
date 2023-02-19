const { News, NewSchema } = require("./news.model");
const { Tasks, TasksSchema } = require("./tasks.model");

function setupModels(sequelize) {
  News.init(NewSchema, News.config(sequelize))
  Tasks.init(TasksSchema, Tasks.config(sequelize))
}

module.exports = setupModels;