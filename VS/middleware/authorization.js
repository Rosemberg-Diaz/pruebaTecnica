import jwt from 'jsonwebtoken'

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null)return res.send("Empty token")
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,user)=>{
        if(error) return res.send({error: error.message});
        req.user = user;
        next();
    })
}

export {authenticateToken};