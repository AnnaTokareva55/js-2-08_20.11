const fs = require ('fs')
const moment = require ('moment')

const logger = (action, name) => {
    fs.readFile ('./dist/server/db/logs.json', 'utf-8', (err, data) => {
        if (err) {
            console.log ('Can not read logs...')
        } else {
            let d = JSON.parse (data)
            let newLog = {
                name_prod: name,
                user_action: action,
                time: moment().format ('DD MM YYYY, h:mm:ss')
            }
            console.log (newLog)
            d.push (newLog)
            fs.writeFile ('./dist/server/db/logs.json', JSON.stringify(d), (err) => {
                if (err) {
                    console.log ('Can not write...')
                }
            })
        }
    })
}

module.exports = logger