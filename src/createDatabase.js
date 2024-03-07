const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// link to DATABASE
const DATABASE_URL = "mongodb+srv://vivekvirade97:YX0br7yBAl414doz@cluster0.jg5wggw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))




const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()