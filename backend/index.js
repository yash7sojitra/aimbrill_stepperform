const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

//ROUTES
//Create Employee
app.post("/employees", async (req, res) => {
  try {
    const { name, email, phone, company, service, budget } = req.body;
    const newEmployee = await pool.query(
      "INSERT INTO employee (name,email,phone,company,service,budget) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [name, email, phone, company, service, budget]
    );

    res.json(newEmployee.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/employees", async (req, res) => {
  try {
    const allEmployees = await pool.query("SELECT * FROM employee");
    res.json(allEmployees.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
