const functions = require('firebase-functions/v1');
const admin = require('firebase-admin');
admin.initializeApp();

// modules
exports.team = require('./modules/team')
