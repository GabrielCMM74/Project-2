const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({

    stockName:{
        type: String,
        enum: ['TSLA', 'AAPL', 'MSFT', 'GOOG', 'GOOGL', 'AMZN', 'VFC', 'FB', 'NVDA'],
        default: 'TSLA'
    },
    stockType:{
        type: String,
        enum: ['Finance', 'Media', 'Digital Currency', 'NFT', 'S&P', 'Auto', 'Data' ]
    }
})



const portfolioSchema = new Schema({
    portfolio: {
        type: String
    },
     user: {type: Schema.Types.ObjectId, ref: 'User'},
     userName: String
    ,
    budget: {
        type: Number,
        
    },
    expenseType: {
        type: String,
        enum: ['Housing', 'Food', 'Utilities', 'Loans', 'Medical', 'Insurance', 'Car', 'Gas','Clothes', 'Other'],
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
    },
    stocks: [stockSchema]
    
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
