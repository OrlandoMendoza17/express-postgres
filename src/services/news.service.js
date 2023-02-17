const sequelize = require("../connection")

class NewsService {
  async getAll() {
    const [data, metadata] = await sequelize.query("SELECT * FROM public.news")
    return {
      data,
      length: metadata.rowCount,
    };
  }
  
  async findOne(id){
    const [data, metadata] = await sequelize.query(`SELECT * FROM public.news WHERE id = ${id}`)
    return data[0];
  }
}

module.exports = NewsService;