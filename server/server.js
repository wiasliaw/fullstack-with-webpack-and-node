const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const logger = require('morgan')
const ejs = require('ejs');

/* app config
** ***** ***** ***** ***** ***** ***** */
  //setting
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
app.use(logger('common'));
  //view engine setting for index.html
app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

/* router
** ***** ***** ***** ***** ***** ***** */
/* app.post('/apis', (req, res)=>{
 * @ you can add your apis here!
}); */

app.get('/', (req, res, next)=>{
  res.render('index');
});

/* listen
** ***** ***** ***** ***** ***** ***** */
app.listen(process.env.PORT||8000, ()=>{
  console.log(`server start on : ${process.env.PORT||8000}`)
});
