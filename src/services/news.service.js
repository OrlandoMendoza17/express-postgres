// const sequelize = require("../connection")

const pool = require("../connection")

// const getConnection = require("../connection/pg");

class NewsService {
  async getAll() {
    const response = await pool.query("SELECT * FROM public.news")
    return response;

    // const client = await getConnection()
    // const response = await client.query("SELECT * FROM sipi.tasks")
    // console.log(response)

    // const response = await sequelize.query("SELECT * FROM sipi.tasks")
    // const [data, length] = await sequelize.query("SELECT * FROM dbo.tbl_carrera")
    // console.log(response)
  }
  
  async findOne(id){
    const response = await pool.query(`SELECT * FROM public.news WHERE id = ${id}`)
    console.log(response)
    
    return response.rows[0];
  }
}

module.exports = NewsService;