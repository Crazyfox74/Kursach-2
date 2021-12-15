const {Sequelize} = require('sequelize')

module.exports=new Sequelize (

    //process.env.DB_NAME,
    //process.env.DB_USER,
   // process.env.DB_PASSWORD,
   // {
   //     dialect: "mysql",
   //     host: process.env.DB_HOST,
   //     port: process.env.DB_PORT
  //  }

    'kursach','root','Iliaru2001',{
        host: 'localhost',
        dialect: 'mysql'
    }

)