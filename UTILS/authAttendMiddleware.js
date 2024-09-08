import jwt from 'jsonwebtoken';

export const ensureAuthenticated = (req, res) => {
    const token = req.header('Authorization').split(' ')[1];
    if (!token) {
        return res.status(400).json({ message: 'No token, authorization denied' });
    };
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    }
    catch(error){
        return res.status(401).json({ message: 'Token is not valid' });
    }
}