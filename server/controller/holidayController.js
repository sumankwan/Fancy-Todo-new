const axios = require('axios')

class holidayController {
    static holiday (req, res, next) {
        const year = req.params.year

        axios({
                method: 'get',
                url: `https://calendarific.com/api/v2/holidays?&api_key=${process.env.API_KEY}&country=ID&year=${year}`
            })
            .then((response) => {
                res.status(200).json({
                    data: response.data
                })
            })
            .catch((err) => {
                next(err)
            })
    }
}

module.exports = {holidayController}