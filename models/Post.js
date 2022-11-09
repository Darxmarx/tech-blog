// set up sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// set up Post model
class Post extends Model { }

Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Post;
