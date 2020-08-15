


app.post('/user', body('email').custom(value => {
  return User.findUserByEmail(value).then(user => {
    if (user) {
      return Promise.reject('E-mail already in use');
    }
  });
}), (req, res) => {
  // Handle the request
});


app.post('/user', body('email').custom(value => {
    return User.findUserByEmail(value).then(user => {
      if (user) {
        return Promise.reject('E-mail already in use');
      }
    });
  }), (req, res) => {
    // Handle the request
  });