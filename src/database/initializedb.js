const Sequelize = require('sequelize')

let db;

async function loadSequelize() {
    const variablesRDS = JSON.parse(process.env.SECRET_RDS) || []
    const dbInstance = new Sequelize(
        variablesRDS.name,
        variablesRDS.username,
        variablesRDS.password, {
            host: variablesRDS.host,
            port: variablesRDS.port,
            maxConcurrentQueries: 100,
            dialect: 'mysql',
            pool: {
                maxConnections: 5,
                maxIdleTime: 30,
                idle: 10000,
                acquire: 10000,
                max: 15,
                min: 0
            },
            logging: false
        }
    )

    await dbInstance.authenticate()

    return dbInstance
}

module.exports.sequelize = async() => {
    if (!db) {
        db = await loadSequelize();
    } else {
        db.connectionManager.initPools();
        if (db.connectionManager.hasOwnProperty("getConnection")) {
            delete db.connectionManager.getConnection;
        }
    }
    return db
}