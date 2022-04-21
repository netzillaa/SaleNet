
authentication_jwt = (req, res, next) => {
    //we get  the header that has token and its in the format of BEARER TOKEN
    const auth_header = req.headers['authentication-header'];
    // so we need to split and get the second half which is the token
    //we check first if ehader exist
    const token = auth_header && auth_header.split(' ')[1]
    if (token == null) {
        return res.sendStatus(401)
    }
    //verification requires the token and the secret we used
    jwt.verify(token, process.env.TOKEN, (err, user) => {
        if (err) {
            console.log("bad token");
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    })
}