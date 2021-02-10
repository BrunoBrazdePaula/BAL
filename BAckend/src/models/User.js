const mongoose = require("mongoose");
const mongoosePag = require("mongoose-paginate-v2");

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userNickname: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userMobileDDD: {
        type: String,
        required: true,
    },
    userMobileNumber: {
        type: String,
        required: true,
    },
    userLogin: {
        type: String,
        required: true,
    },
    userPass: {
        type: String,
        required: true,
    },
    userPais: {
        type: String,
        required: true,
    },
    userState: {
        type: String,
        required: true,
    },
    userCity: {
        type: String,
        required: true,
    },
    userZip: {
        type: String,
        required: false,
    },
    userGender: {
        type: String,
        required: true,
    },
    userRgDoc: {
        type: String,
        required: true,
    },
    userCpfDoc: {
        type: String,
        required: true,
    },
    userAddress: {
        type: String,
        required: false,
    },
    userDistrict: {
        type: String,
        required: false,
    },
    userComplement: {
        type: String,
        required: false,
    },
    userBirth_day: {
        type: String,
        required: true,
    },
    userBirth_month: {
        type: String,
        required: true,
    },
    userBirth_year: {
        type: String,
        required: true,
    },
    userActive: {
        type: Boolean,
        default: true,
    },
    userCreated_At:{
        type: Date,
        default: Date.now
    },
});

UserSchema.plugin(mongoosePag);
mongoose.model('User', UserSchema);
