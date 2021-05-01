const constants = require('./constants')
const Joi = require('joi')
const errors = {
    NOT_VALID_DATE: date => `${date} is not a valid date.`,
}

const is_valid_date = (date) => {
    if( (new Date(date)) == 'Invalid Date' ){
        return false
    }
    return true
}

module.exports = {
    get_days_diff: (from_date, to_date) => {
        if(!from_date || !is_valid_date(from_date)){
            throw new Error(errors.NOT_VALID_DATE(from_date))
        }
        if(!to_date || !is_valid_date(to_date)){
            throw new Error(errors.NOT_VALID_DATE(to_date))
        }
        from_date = new Date(from_date)
        to_date = new Date(to_date)
        return Math.round((to_date.getTime() - from_date.getTime())/constants.DAY_IN_MS)
    },

    generate_day_from_n_days: (n, from_date) => {
        if(!from_date){
            from_date = new Date();
        }else{
            if(!is_valid_date(from_date)){
                throw new Error(errors.NOT_VALID_DATE(from_date))
            }
            from_date = new Date(from_date)
        };
        Joi.assert(n, Joi.number().integer())
        return new Date(from_date.getTime() + n*constants.DAY_IN_MS)
    }
    
}