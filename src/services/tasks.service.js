const sequelize = require("../connection");

const { Tasks } = sequelize.models

class TasksService {
  async getAll() {
    // const response = sequelize.query("SELECT * FROM public.tasks")
    const response = await Tasks.findAll()
    return response;
  }
}

module.exports = TasksService;