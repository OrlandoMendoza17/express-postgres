const pool = require("../connection");

class TasksService {
  async getAll() {
    const response = await pool.query("SELECT * FROM public.tasks")
    return response;
  }
}

module.exports = TasksService;