const mongoose = require("mongoose")
const passport = require("passport")
const express = require('express')
const connectDB = require('./config/db')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const app = express()
connectDB()
//body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// require('./config/passport')(passport)

const PORT =   process.env.PORT || 5000  ;


// session middleware

// app.use(
//     session({
//       secret: 'keyboard cat',
//       resave: false,
//       saveUninitialized: false,
//       store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     })
//   )
  
//passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

app.use('/rescue', require('./routes/rescue'))
// app.use('/auth', require('./routes/auth'))
app.use('/', require('./routes/index'))

app.listen(
  process.env.PORT || 5000,
  console.log(`Server running  on port ${PORT}`)
)
