'use stric'

const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

// db Connection
const MatrixSchema = new Schema({
    matrix: {
        type: Object,
    },
    savedDate: {
        type: Date
    }
});

module.exports = mongoose.mondel('Schema', MatrixSchema);