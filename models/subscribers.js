const monogoose = require('mongoose')

const subscriberSchema = new monogoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = monogoose.model('Subscriber', subscriberSchema)
