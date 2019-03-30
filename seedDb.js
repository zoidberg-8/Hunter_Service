const faker = require("faker");
const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  database: "nike"
});

for (var i = 0; i < 11; i++) {
  connection.query(
    "insert into suggestions(name, price, category, colors, style) values (?,?,?,?,?);",
    [
      faker.lorem.words(),
      faker.random.number(300),
      faker.lorem.words(),
      faker.random.number(10),
      faker.lorem.words()
    ],
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
}

for (var i = 0; i < 11; i++) {
  connection.query(
    "insert into description(description, benefits, item_headline) values (?,?,?);",
    [faker.lorem.words(), faker.lorem.words(), faker.lorem.words()],
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
}
