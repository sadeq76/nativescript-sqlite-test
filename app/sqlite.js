import Sqlite from "nativescript-sqlite";

let dataBase = null;

export function createDB() {
  new Sqlite("OFFLINEAPPDB", function (err, db) {
    dataBase = db;
    db.execSQL(
      "CREATE TABLE OFFLINEAPP (ID INT PRIMARY KEY, NAME TEXT, COUNT INTEGER)"
    );
    db.execSQL(
      "INSERT INTO OFFLINEAPP (ID, NAME, COUNT) values (1, 'COUNTER', 0)"
    );
  });
}
export function updateData(counter) {
  dataBase.execSQL(
    `UPDATE OFFLINEAPP SET ID = 1, NAME = 'COUNTER', COUNT = ${counter} WHERE ID=?`,
    [1]
  );
}
export function getData() {
  let result = 0;
  dataBase.get("SELECT * FROM OFFLINEAPP WHERE ID=?", [1], function (err, row) {
    result = row[2];
  });
  return result;
}
