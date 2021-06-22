const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE package (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pname text UNIQUE,
            pfiles text,
            rquantities INTEGER,
            start date,
            description text
            CONSTRAINT pname UNIQUE (pname)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (pname, pfiles, rquantities, start, description) VALUES (?,?,?,?,?)'
                db.run(insert, ["Package4","doc.pdf",10, 10-20-2021, "esta es una descripcion")
                db.run(insert, ["user","doc.pdf",20, 11-20-2021, "hier gibt es eine Ubersetzung")
            }
        });
    }
});

db.serialize(function() {
    db.run("CREATE TABLE if not exists lorem (info TEXT)");

    var stmt = db.prepare("INSERT INTO pacakge VALUES (?,?,?,?,?)");
    stmt.finalize();

    db.all("SELECT * from package",function(err,rows){
        console.log("---- db.all")
    });


    db.get("SELECT * from package where id='0'", function (err, row) {
        console.log("---- db.get")
    });
});

db.close();


module.exports = db
