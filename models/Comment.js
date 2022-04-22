const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        commentBody: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        blogId: {
            type: DataTypes.INTEGER,
            references: {
               model: 'blog',
               key: 'id' 
            }
        }
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
    }
);

module.exports = Comment;