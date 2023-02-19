const sequelize = require("../connection")
const createHttpError = require("http-errors");

const { News } = sequelize.models

class NewsService {
  async getAll() {
    const tasks = await News.findAll()
    return {
      data: tasks,
      length: tasks.length,
    };
  }

  async findOne(id) {

    const data = await News.findByPk(id)
    console.log("data", data)
    
    if (!data) {
      throw new createHttpError.NotFound("That New doesn't exist!")
    }
    return data;
  }

  async create(data) {
    const newNews = await News.create(data)
    return newNews;
  }
  
  async update(data){
    const user = await this.findOne()
    const updatedUser = await user.update(data)
    return updatedUser;
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy()
  }
}

module.exports = NewsService;