const express = require('express');
const cors = require('cors');

const cookieParser = require('cookie-parser');

const session = require('./middleware/session');
const flash = require('./middleware/flash');
const auth = require('./middleware/auth');
const user = require('./middleware/user');

const suggestionController = require('./controllers/suggestion');
const mainController = require('./controllers/main');
const { googleApiIndex, googleApi } = require('./controllers/google');

const server = express();

server.set('view engine', 'pug');

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(session);
server.use(flash);
server.use(user);


server.get('/', mainController.showMain);
server.post('/', mainController.login);

server.use(auth);

server.get('/suggestions', suggestionController.showSuggestions);
server.post('/suggestions', suggestionController.createSuggestion);
server.get('/suggestions/:id', suggestionController.showSuggestion);
server.post('/suggestions/:id', suggestionController.toggleVote);

server.get('/googleapi', googleApiIndex);
server.post('/googleapi', googleApi);

server.listen(3000, 'localhost', () => {
    console.log('Сервер запущен!');
});