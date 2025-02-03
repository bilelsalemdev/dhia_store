const { notFound, errors } = require('./middlewares/errors')
const generateAdmin = require('./config/generateAdmin')
const connectDatabase = require('./config/database')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const { readdirSync } = require('fs')
const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const path = require('path')
var cors = require('cors')

// Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
	console.log(`ERROR: ${err.message}`)
	console.log('Shutting down due to Uncaught Exception')
	process.exit(1)
})

// Config Env Path
dotenv.config({ path: 'config/.env' })

// Connect database
connectDatabase()

// Generate Admin account
generateAdmin()

// Create App
const app = express()
const corsOptions = {
	origin: '*', // Allow all origins
	credentials: false, // Disable credentials when origin is '*'
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
	allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};
// Middleware
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(
	fileUpload({
		createParentPath: true,
		limits: { fileSize: 1024 * 1024 * 2 },
	})
)

// Routes
readdirSync('routes').map((route) => {
	app.use('/api', require(`./routes/${route}`))
})

// Middleware
app.use(notFound)
app.use(errors)

// Start server
const port =5001 ||  process.env.PORT 
const server = app.listen(port, () => {
	console.log(`Server started on port ${port} in ${process.env.NODE_ENV} mode.`)
})

// Handle Unhandled Promise rejection.
process.on('unhandledRejection', (err) => {
	console.log(`ERROR: ${err.message}`)
	console.log('Shutting down the server due to Unhandled Promise rejection')
	server.close(() => {
		process.exit(1)
	})
})
