const mongoose = require('mongoose')

const connectDatabase = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		})
		console.log(`MongoDB Database Connected with Host: ${conn.connection.host}`)
	} catch (error) {
		console.log('Connection Error => ', error.message)
		process.exit(1)
	}
}

module.exports = connectDatabase
