const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: {
    type: String,
  },
  Event_type: {
    type: String,
  },
  Event_date: {
    type: Date,
  },
});

const EventSchema = mongoose.model("Events", Schema);

module.exports = EventSchema;
