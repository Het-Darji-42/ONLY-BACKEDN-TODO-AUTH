const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({
            message: 'No token, authorization denied',
        });
    }

    try {
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secret);
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Token is not valid',
        });
    }
};

module.exports = authMiddleware;
