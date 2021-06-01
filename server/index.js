

const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001

// const {database} = require('./db')
// interface LocationResult {
//     locations: [{
//         Name: string
//     }]

// }

const sqlite3 = require('sqlite3').verbose()


app.use(cors())

// const db = new sqlite3.Database('./db/geogg.sqlite3', sqlite3.OPEN_READWRITE, (err) => {
//     if (err) { return console.error(err.message) }

//     console.log('Connected to database')
//     console.log('db', db.tables)
// })

// const database = require('./db/database')

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/locations?', async (req, res) => {
    try {
        const db = new sqlite3.Database('./db/geogg.sqlite3', sqlite3.OPEN_READWRITE, (err) => {
            if (err) { return console.error(err.message) }

            console.log('Connected to database')
            console.log('db', db.tables)
        })

        if (req.query.q.length < 2) {
            res.send('not searching, enter more characters to search')
        } else {



            async function getSearchRes() {
                let searchResults = []

                await db.each(`SELECT * FROM locations WHERE name LIKE "%` + req.query.q.toString() + '%" COLLATE NOCASE', (err, row) => {
                    if (err) {
                        console.error(err.message)
                    }


                    searchResults.push(row.name)
                    // console.log(row.name.toString())


                }, function(err, rows) {
                    // console.log(searchResults)
                    res.send(searchResults)
                    return searchResults


                })
                // console.log('query res', searchResults)
                return await searchResults
            }

            const results = await getSearchRes()

            console.log('results', results)

            // return JSON.stringify(searchResults)

            // }



            // console.log('search results', JSON.stringify(searchResults))
            // res.status(200).send('results', searchResults)
            // await res.status(200).send(getSearchRes())
            // res.status(200).send(JSON.stringify(results))


            db.close((err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log('Close the database connection.');
            });
        }

    } catch (error) {
        console.error(`There was an error performing request \n${error}`)
        res.status(400).send(`Error`, error)
    }



})


app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})