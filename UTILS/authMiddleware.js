// import jwt from 'jsonwebtoken';

// export const ensureAuthenticated = (req, res) => {
//     const accessToken = req.cookies.accessToken;
//     if (!accessToken) {
//         return res.status(400).json({ message: 'No token, authorization denied' });
//     };
//     try{
//         const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
//         req.user = {id: decodedToken.id};
//         next();
//     }
//     catch(error){
//         return res.status(401).json({
//              message: 'unauthorised' });
//     }
// }


import jwt from 'jsonwebtoken';

export const ensureAuthenticate = (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    req.user = { id: decoded.id }; // Changed decodedToken to decoded
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}
