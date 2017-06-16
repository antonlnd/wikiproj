var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

let Page = db.define('page', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        urlTitle: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM('open', 'closed')
        },
        date: {
            type: Sequelize.DATE,
            defualtValue: Sequelize.NOW
        }
    }, {
        getterMethods: {
            urlRoute: () => {
            return '/wiki/' + urlTitle;
            }
        }
    })

let User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});



module.exports = {
  Page: Page,
  User: User,
  db: db
};