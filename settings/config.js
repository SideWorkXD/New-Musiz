require("dotenv").config();
module.exports = {
    TOKEN: process.env.TOKEN || "YOUR_TOKEN", 
    PREFIX: process.env.PREFIX || "$", 
    OWNER_ID: process.env.OWNER_ID || "YOUR_CLIENT_ID", 
    EMPTY_LEAVE: 60, 
    LEAVE_EMPTY: true, 
    LEAVE_FINISH: true, 
    LEAVE_STOP: true,
}