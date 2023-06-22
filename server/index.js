const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const port = 5000;

// middleware
app.use(cors());
app.use(express.json()); // req.body

/*
ROUTES
*/
// create location
app.post("/locations", async (req, res) => {
  try {
    const { address_1, rating, seller_name, seller_email, photo } = req.body;
    const newLocation = await pool.query(
      "INSERT INTO locations (address_1, rating, seller_name, seller_email, photo) VALUES($1, $2, $3, $4, $5)",
      [address_1, rating, seller_name, seller_email, photo]
    );

    res.json(newLocation);
  } catch (error) {
    console.error(error.message);
  }
});

// get all locations
app.get("/locations", async (req, res) => {
  try {
    const allLocations = await pool.query("SELECT * FROM locations");
    res.json(allLocations.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get a location
app.get("/locations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const location = await pool.query(
      "SELECT * FROM locations WHERE loc_id = $1",
      [id]
    );
    res.json(location);
  } catch (error) {
    console.error(error.message);
  }
});

// update a location
app.put("/locations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { address_1, rating, seller_name, seller_email, photo } = req.body;
    const location = await pool.query(
      "UPDATE locations SET (address_1, rating, seller_name, seller_email, photo) = ($1, $2, $3, $4, $5) WHERE loc_id = $6",
      [address_1, rating, seller_name, seller_email, photo, id]
    );
    res.json(location);
  } catch (error) {
    console.error(error.message);
  }
});

// delete a location

app.delete("/locations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query(
      "DELETE FROM locations WHERE loc_id = $1",
      [id]
    );
    res.json(response);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
