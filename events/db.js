const firebase = require( 'firebase/app' );
require('firebase/database')
const tryconfig = require('../config.js')

firebase.initializeApp(tryconfig.firebaseConfig);
let database = firebase.database();


module.exports = {
    database
}