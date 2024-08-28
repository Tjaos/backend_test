import { Sequelize } from "sequelize";
import config  from "./config/config.json";

type Enviroment = 'development' | 'production';

const env = process.env.NODE_ENV as Enviroment|| 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect as any,
});

export default sequelize;