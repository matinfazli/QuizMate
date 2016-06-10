module.exports = {
  auth: firebase.auth(),

  register(email, password, callback) {
    this.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      callback(error);
    }.bind(this));
  },

  login(email, password, callback) {
    this.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      callback(error);
    }.bind(this));
  },

  logout(callback) {
    this.auth.signOut().then(function() {
      callback('success');
    }, function(err) {
      callback(err);
    });
  },

  getAuth(callback) {
    this.auth.onAuthStateChanged(function(user) {
      if (user) {
        callback(user);
      } else {
        callback(null);
      }
    }.bind(this));
  },

  getUserRef() {
    return this.auth;
  }
}