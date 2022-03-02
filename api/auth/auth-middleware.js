const checkToken = (req, res, next) => {
    const token = localStorage.getItem('token')
    if (!token) {
        next({ status: 401, message: 'not logged in'})
    } else {
        next()
    }
}

module.exports = {
    checkToken
}