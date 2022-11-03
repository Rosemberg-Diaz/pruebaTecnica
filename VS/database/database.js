import Sequelize from "sequelize"

export const sequelize = new Sequelize(
    'peopleApi',
    'adminPeople',
    'rddm22',{
    host: 'localhost',
    port: '5433',
    dialect : 'postgres'
})