const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        image: {
            type: String,
        },
        phone: {
            type: Number,
        },
        location: {
            type: String,
        },
        status: {
            type: String,
        }
    },
    {timestamps: true}
);

ProfileSchema.pre("find", function () {
    this.where({ deleted: false});
});

const Profile = new mongoose.model("profile", ProfileSchema);

module.exports = Profile;