require('dotenv').config()
const { CONNECTION_STRING } = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        CREATE TABLE waitlist (
        user_id SERIAL PRIMARY KEY,
        company_name varchar(200),
        email varchar(200));

        INSERT INTO waitlist (user_id, company_name, email)
        values (1, 'Stripe', 'yonelcasper@gmail.com');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}