const firstMiddleware = function (req, res, done) {
  // Application logic...
  if (false) {
    return res.send('Not allowed');   // Middleware failed
  }
  return done();                      // Call done, if middleware succeeded
};

const secondMiddleware = function (req, res, done) {
  // More application logic...
  return done();                      // Call done, if this middleware also succeeded
};

router.get('/secret', firstMiddleware, secondMiddleware, function callback(req, res) {
  // Finally access to route logic, if both middlewares succeeded
});
