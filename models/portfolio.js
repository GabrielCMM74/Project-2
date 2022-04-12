const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const portfolioSchema = new Schema({
    portfolio: {
        type: String},
     user: {type: Schema.Types.ObjectId, ref: 'User'},
     userName: String
    ,
    budget: {
        type: Number,
        
    },
    expenseType: {
        type: String,
        enum: ['Housing', 'Food', 'Utilities', 'Loans', 'Medical', 'Insurance', 'Car', 'Gas', 'Other'],
        default: 'Other'
    },
    date: {
        type: Date,
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
        max: 9999999 
    },
    amountLeft: {
        type: Number, 
    }
    
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
