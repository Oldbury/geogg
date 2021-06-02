

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000
const path = require("path")

const sqlite3 = require('sqlite3').verbose()


app.use(cors())


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

                await db.each(`SELECT * FROM locations WHERE name LIKE "` + req.query.q.toString() + '%" COLLATE NOCASE', (err, row) => {
                    if (err) {
                        console.error(err.message)
                    }


                    searchResults.push(row.name)
                    // console.log(row.name.toString())


                }, function(err, rows) {
                    if (err) {
                        console.error(err)
                    }
                    // console.log(searchResults)
                    searchResults.sort((a, b) => a.length - b.length)
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

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../geogg/build')))
    app.get('*', (req,res) => {
      res.sendFile(path.join(__dirname, '../geogg/build', 'index.html'))
    })
  }

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})