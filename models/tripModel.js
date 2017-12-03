const mongoose = require('mongoose');
const uuid = require('uuid');

const tripSchema = mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  startDate: Date,
  endDate: Date,
  tripUrl: String,
  public: {type: Boolean, default: true},
  interests: [],
  media: [
    {
      file: String,
      caption: String
    }
  ],
  days: [
    {
      calendarDate: Date,
      diaryEntry: String,
      travelDetails: String,
      locations: [
        {
          name: String,
          country: String,
          sites: [
            {
              name: String,
              address: String,
              category: String,
              website: String
            }
          ]
        }
      ]
    }
  ]
});

tripSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    title: this.title,
    description: this.description,
    startDate: this.startDate,
    endDate: this.endDate,
    tripUrl: this.tripUrl,
    public: this.public,
    interests: this.interests,
    media: this.media,
    days: this.days
  };
}

const Trip = mongoose.model("Trip", tripSchema);

module.exports = {Trip};