module.exports = (req, res, next) => {
    if (req.session && !req.session.username) {
        res.redirect('/');
    } else {
        next();
    }
}