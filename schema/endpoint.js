/**
 * Endpoint Test Schema
 * @author Wes King
 */
'use strict';

// Dependencies
const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  url: String,
  method: String,
});

module.exports = mongoose.model('Endpoint', schema);
