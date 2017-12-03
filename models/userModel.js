const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {type: String, required: true}, 
  password: {type: String, required: true},
  displayName: {type: String, required: true},
  emails: [ 
    { value: {type: String, required: true} } 
  ] 
});

userSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    username: this.username,
    password: this.password,
    displayName: this.displayName,
    emails: this.emails
  };
}

const User = mongoose.model("User", userSchema);

module.exports = {User};

User.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (userSchema[idx]) {
      cb(null, userSchema[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

User.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = userSchema.length; i < len; i++) {
      var record = userSchema[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
