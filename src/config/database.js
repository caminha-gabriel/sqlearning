require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST || 'localhost',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DB_NAME || 'sqlnode',
  define: {
    timestamps: false,
    underscored: true,
  },
};