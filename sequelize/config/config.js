const dotenv=require('dotenv')

dotenv.config({path:`.env.${process.env.NODE_ENV || 'development'}`});

module.exports={
    url:process.env.DATABASE_URL,
    dialect:'mysql',
}

