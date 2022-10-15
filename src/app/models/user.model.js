const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const schema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});
schema.methods.encryptPasswork = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
}
schema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}
module.exports = mongoose.model('User', schema)