const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, 'my_secret_key');
     //console.log('CHECK SUCCESSFUL: Your token: ' + token);
    req.userData = decoded;
    next();
  } catch (error) {
    // 401: unauthenticated
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
}
