const User = require('../models/User') // relative path to the User model from user.js

const is_whitelisted = async (linkblue_username) => {
    // try to pull the user from the user table using the linkblue_username
    const user = await User.query().findById(linkblue_username)
    // if we got a user back, return true
    if (user) {
        return true
    }
    // else user is not in table, return false
    else {
        return false
    }
}

// modify the predefined module.exports object
// this effectively makes our is_whitelisted function public
module.exports.is_whitelisted = is_whitelisted
