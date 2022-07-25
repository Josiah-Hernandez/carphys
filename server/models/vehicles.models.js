const mongoose = require('mongoose')

const VehicleSchema = new mongoose.Schema({
    vehicleMake: {
        type: String,
        required : [true, "Vehicle Must Contain A Make"]
    },
    vehicleModel: {
        type: String,
        required : [true, "Vehicle Must Contain A Model"]
    },
    vehicleYear: {
        type: Number,
        required : [true, "Pirate Must Have Booty"]
    },
    catchPhrase: {
        type: String,
        required : [true, "What Be Ye Catch Phrase"]
    },
    crewPosition: {
        type: String,
        required : [true, "Pirate Must Have Crew Position"]
    },
    pegLeg: {
        type: Boolean
    },
    eyePatch: {
        type: Boolean
    },
    hookHand: {
        type: Boolean
    }

}, {timestamps: true})

module.exports.Vehicle = mongoose.model('Vehicle', VehicleSchema)