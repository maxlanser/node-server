module.exports = (req, res, next) => {
    if (req.session && req.session.message) {
        res.locals.message = req.session.message;
        delete req.session.message;
    }
    next();
}