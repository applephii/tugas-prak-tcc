import { Sequelize } from "sequelize";

const db = new Sequelize("tcc", "root", "cantik", {
    host: "35.232.254.1",
    dialect: "mysql",
});

export default db;