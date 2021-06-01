// const sqlite3 = require('sqlite3').verbose()


// const database = new sqlite3.Database('./geogg.sqlite3', (err) => {
//     if (err) { return console.error(err.message) }

//     console.log('Connected to database')
// })

// module.exports = database

// // database table locations was populated via the gui with the content of the tsv file

// // database.serialize(() => {
// //     try {
// //         database.run('CREATE TABLE IF NOT EXISTS locations ("geonameid"	INTEGER, "name"	TEXT, "asciiname"	TEXT, "alternatenames"	TEXT, "latitude"	REAL, "longitude"	REAL, "feature_class"	TEXT,	"feature_code"	TEXT, "country_code"	TEXT,"cc2"	TEXT,"admin1_code"	INTEGER,"admin2_code"	TEXT,"admin3_codeadmin4_code"	TEXT,"population"	TEXT,"elevation"	INTEGER,"dem"	INTEGER,"timezone"	TEXT,"modification_date"	TEXT);', (err) => {
// //             if (err) { console.error('Error', err) }
// //         })

// //         let sql = `SELECT * FROM locations`;

// //         database.all(sql, [], (err, rows) => {
// //             if (err) {
// //                 throw err;
// //             }
// //             rows.forEach((row) => {
// //                 console.log(row.name);
// //             });
// //         });

// //         // database.run("mode '/t'")
// //         // database.run('import "/Users/alistairoldbury/Documents/dev/interviews/geogg/server/db/locationsData.tsv" locations')

// //     } catch (error) {
// //         console.error('error', error)
// //     }

// // })


// database.close((err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Close the database connection.');
// });