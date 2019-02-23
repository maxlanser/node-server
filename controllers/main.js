function showMain(req,res) {
    //console.log(req.cookies);
    //console.log(res.locals);
    //const username = req.cookies.username;
    res.render('index', {});
}

function login(req,res){
    console.log('Тело запроса', req.body);
    req.session.username = req.body.username;
    // res.cookie('username', req.body.username);
    // //console.log(req.body.username);

    res.redirect('/');

    //res.send(`Привет ${req.body.username}`);
}

module.exports = {
    showMain,
    login
}