const checkToken = (req, res, next) => {
    if (!req.token) {
        next({ status: 401, message: 'not logged in'})
    } else {
        next()
    }
}

module.exports = {
    checkToken
}