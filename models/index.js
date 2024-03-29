const User = require('./User');
const Game = require('./Game');
const Review = require('./Review');

User.hasMany(Game, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Game.belongsTo(User, {
  foreignKey: 'user_id'
});

Game.hasMany(Review, {
  foreignKey: 'review_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(Game, {
  foreignKey: 'review_id'
});

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Game, Review };
