const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Not authorized. No token' });
  }

  if (req.headers.authorization && req.headers.authorization.startWith('Bearer ')) {
    const token = req.headers.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        return res.status(403).json({ message: 'Wrong or expired token.' });
      } else {
        req.user = data;
        next();
      }
    });
  }
};

const verifyAdminToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Not authorized. No token' });
  }

  if (req.headers.authorization && req.headers.authorization.startWith('Bearer ')) {
    const token = req.headers.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        return res.status(403).json({ message: 'Wrong or expired token.' });
      } else {
        if (!data.isAdmin) {
          return res.status(403).json({ message: 'You are not admin.' });
        }
        req.user = data;
        next();
      }
    });
  }
};

module.exports = { verifyToken, verifyAdminToken };
