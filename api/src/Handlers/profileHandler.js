const {updateProfile} = require("../controllers/Profile/Profile")

const updateProfileHandler = async (req, res) => {
    const {image, name, phone, location, status} = req.body
    try{
        const update = await updateProfile({image, name, phone, location, status})
        console.log(update)
        res.status(200).json(update)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {updateProfileHandler}