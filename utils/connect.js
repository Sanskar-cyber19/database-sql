const sqlite3 = require('sqlite3').verbose()
import { open, Database } from "sqlite";

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database(
  "./db.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

// Serialize method ensures that database queries are executed sequentially
// db.serialize(() => {
//   // Create the items table if it doesn't exist
//   db.run(
//     // `CREATE TABLE IF NOT EXISTS APPLICATIONS (
//     //     id INTEGER PRIMARY KEY,
//     //     name TEXT,
//     //     description TEXT,
//     //      TEXT
//     //   )`,
//     `CREATE TABLE IF NOT EXISTS APPLICATION (
//         "id" INTGER,
//         "name"	TEXT,
//         "token"	TEXT,
//         "token_status"	TEXT,
//         "slug"	TEXT,
//         "created_date"	TEXT,
//         "info"	TEXT,
//         PRIMARY KEY("name","token","slug")
//       )`,
//     (err) => {
//       if (err) {
//         return console.error(err.message);
//       }
//       console.log("Created items table.");

//       // Clear the existing data in the products table
//     //   db.run(`DELETE FROM APPLICATION`, (err) => {
//     //     if (err) {
//     //       return console.error(err.message);
//     //     }
//     //     console.log("All rows deleted from items");

//         // Insert new data into the products table
//         // const values1 = [
//         //   "Oshawott",
//         //   "Basic Pokemon. HP 60. Surprise Attack 20. Flip a coin. If heads, this attack does 10 more damage. Water Gun 30. Weakness: Lightning x2. Resistance: none. Retreat Cost: 1.",
//         //   "/collection/item1.png",
//         // ];
//         const values1 = [
//             "1",
//           "TESTING",
//           "testing2947294",
//           "verify",
//           "testing",
//           "now",
//           "tesing database",
//         ];

//         const insertSql = `INSERT INTO APPLICATION(id, name, token, token_status, slug, created_date, info ) VALUES(?,?, ?, ?, ?, ?, ?)`;

//         db.run(insertSql, values1, function (err) {
//           if (err) {
//             return console.error(err.message);
//           }
//           const id = this.lastID; // get the id of the last inserted row
//           console.log(`Rows inserted, ID ${id}`);
//         });
//         //   Close the database connection after all insertions are done
//         db.close((err) => {
//           if (err) {
//             return console.error(err.message);
//           }
//           console.log("Closed the database connection.");
//         });
//       });
//     }
//   );
// });

export async function openDB(){
    return open({
        filename:'./db.db',
        driver: sqlite3.Database,
    })
}