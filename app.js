const express     = require( 'express' );
const app         = express(); // creates instance of express application
const nunjucks    = require('nunjucks');
// const routes      = require('/routes');
const bodyParser  = require('body-parser');
const morgan = require('morgan');
const models = require('/models');

morgan(':method :url :status :res[content-length] - :response-time ms')


app.use(express.static('public'));
// ------ nunjucks ------

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

// ------ middlewear ------
// app.use(bodyParser.urlencoded({extended: true})); //required for bodyParser
// app.use(bodyParser.json({type: '*+json'}));


// app.use('/', routes); //creates middleware

app.use('/', (req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
  });

// =============// =============// =============// =============


models.sync()
.then( () => {
    app.listen(3000, () => {
        console.log("We\'re listening!");
    });
})
.catch(console.error);