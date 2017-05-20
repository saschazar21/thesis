const express = require('express');
const router = express.Router();

// Include OAuth configuration from ./oauth.js in middleware format.
const oauth = require('./oauth');

// fully accessible route without authentication
router.get('/all', function allRoute(req, res) {
  // route logic ...
});

// Every route from now on demands authentication via the following middleware.
router.use(oauth);

router.get('/limited', function limitedRoute(req, res) {
  // route logic ...
});

router.get('/secret', function secretRoute(req, res) {
  // route logic ...
});

// Export router instance for using as middleware in app's main entry point.
module.exports = router;
