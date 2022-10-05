import sqlite3 from 'sqlite3'
import { open } from "sqlite";
// const db = new sqlite3.Database("test.db");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const db = await open({
        filename: "test.db",
        driver: sqlite3.Database,
      });
      
      const item = await db.get("select * from test where id=1");
      if (item) {
        db.exec(`UPDATE test SET name = '${req.body.name}' WHERE id = 1`);
      } else {
        db.exec(`insert into test (name) values ('${req.body.name}')`);
      }
      return res.status(200).send("insert item sucessful");
    } catch (err) {
      res.status(400).send("error: "+err);
      return;
    }
  } else if (req.method === "GET") {
    try {
        const db = await open({
            filename: "test.db",
            driver: sqlite3.Database,
          });
          const item = await db.get("select * from test where id=1");
          return res.status(200).json(item.name)
    } catch (err) {
        return res.status(400).json("error: "+ err)
    }
  } else {
    res.status(500).send("cannot " + req.method);
  }
}
