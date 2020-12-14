const mongoose = require("mongoose")
const passport = require("passport")
const express = require('express')
const connectDB = require('./config/db')
var cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const app = express()
connectDB()
//body parser
// app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3000', 'http://patronus-72ce7.firebaseapp.com'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.header('Access-Control-Allow-Origin', origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "*"
  )
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials' , true)
  // if (req.method === 'OPTIONS') {
  //     res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
  //     return res.status(200).json({});
  // }
  next();
});


require('./config/passport')(passport)

const PORT =   process.env.PORT || 5000  ;


// session middleware

app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use('/rescue', require('./routes/rescue'))
app.use('/adopt', require('./routes/adopt'))
app.use('/partners' , require('./routes/partners'))
// app.use('/auth', require('./routes/auth'))
app.use('/', require('./routes/index'))
app.use('/vet', require('./routes/vet'))
app.use('/auth', require('./routes/auth'))
app.use('/user', require('./routes/users'))


app.listen(
  process.env.PORT || 5000,
  console.log(`Server running  on port ${PORT}`)
)
