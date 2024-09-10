import jwt from 'jsonwebtoken'

export const ensureAuthenticated = async (req, res, next) => {
    
    const accessToken = req.headers('authorization');
    
    if(!accessToken) return res.status(401).json({message: 'Access Denied'})
        try{
    
            const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET_KEY)
            req.user = { id: decodedToken.id}
            next()
        }
        catch(error){
            return res.status(403).json({message: 'unauthorized'})
        }

}