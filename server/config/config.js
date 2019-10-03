//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://josebautista:CC0Vkp6vj8TiOBuJ@cluster0-kqadx.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: 'd084bd96b8584fc787e0a9077d68d367' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};