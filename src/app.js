
const express = require('express');
const app = express()
const path = require('path')
const subscriberModel = require("./models/subscribers");


// Present the composed message to the customer on the main webpage.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/home/index.html'))
  })
// Retrieve an array containing all subscribers' information from the database.
app.get("/subscribers", async (req, res) => {
  const subscribers = await subscriberModel.find().select("-__v");
  res.json(subscribers);
});
// Fetch an array comprising the names of subscribers and the channels they are subscribed to from the database.
app.get("/subscribers/names", async (req, res) => {
  const subscribers = await subscriberModel
    .find()
    .select("-_id -subscribedDate -__v");
  res.json(subscribers);
});
//// Retrieve a specific subscriber from the database using their unique identifier (_id).
app.get("/subscribers/:id", async (req, res) => {
  const id = req.params.id;
  await subscriberModel
    .findById(id)
    .select("-__v")
    .then((data) => {
      if (!data) {
        // In case the subscriber cannot be found for the provided ID.
        error = Error(`Subscriber doesn't exist with the given _id: ${id}.`);
        res.status(400).json({ message: error.message });
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      // If the ID is not entered in the correct format, this comment applies.
      res.status(400).json({
        message: `Subscriber doesn't exist with the given _id: ${id}.`,
      });
    });
});
// Manages and deals with any unwanted or unexpected requests.
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;

