const path = require('path');
const express = require('express');
const session = require('express-session');
const expressHbs = require('express-handlebars');
const errorPage = require('./controllers/controllerFunctions/errorController');
const app = express();
const PORT = process.env.PORT || 3010;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Not sure yet',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helpers');
const bodyParser = require('body-parser');
const hbs = expressHbs.create({ helpers });

app.engine(
  'hbs',
  expressHbs.engine({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);
app.set('view engine', 'hbs');
app.set('views', 'views')
app.use(errorPage.get404);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
});