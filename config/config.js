require("dotenv").config();
module.exports = {
    "development": {
        "username": process.env.LOCAL_DB_USERNAME,
        "password": process.env.LOCAL_DB_PASSWORD,
        "database": process.env.LOCAL_DB_DATABASE,
        "host": process.env.LOCAL_HOST,
        "dialect": process.env.LOCAL_DB_CONNECTION,
        "logging": console.log,
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": process.env.PROD_DB_USERNAME,
        "password": process.env.PROD_DB_PASSWORD,
        "database": process.env.PROD_DB_DATABASE,
        "host": process.env.PROD_HOST,
        "dialect": process.env.PROD_DB_CONNECTION,
        // "define": {
        //     "createdAt": "created_at",
        //     "updatedAt": "updated_at"
        // }
    }
}