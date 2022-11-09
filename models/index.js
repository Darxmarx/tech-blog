// grab models from folder
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// sets up relationships between models
Post.belongsTo(User, {
    foreignKey: 'user_Id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_Id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_Id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_Id',
    onDelete: 'SET NULL'
});

module.exports = { User, Comment, Post };
