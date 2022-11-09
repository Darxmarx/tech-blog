// set up withAuth that automatically redirts api path to login if user is not logged in to current session
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect("/login");
    } else {
        next();
    }
};

module.exports = withAuth;
