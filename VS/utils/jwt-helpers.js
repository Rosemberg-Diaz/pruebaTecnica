import jwt from 'jsonwebtoken'

function jwtTokens({username,email}){
    const user = {username,email};
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'20m'});
    const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1h'});
    return ({accessToken,refreshToken});
}

export {jwtTokens};