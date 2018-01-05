const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String},
  postedBy: {type: String},
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
      lodging: {
        name: String,
        address: String,
        website: String
      },
      locations: [
        {
          name: String,
          country: String
        }
      ],
      sites: [
        {
          name: String,
          website: String
        }
      ]
    }
  ]
});

tripSchema.virtual('tripLink').get(function(){
  return `/trips/${this.id}`;
});

tripSchema.methods.apiRepr = function() {
  console.log(this);
  return {
    id: this._id,
    title: this.title,
    postedBy: this.postedBy,
    description: this.description,
    startDate: this.startDate,
    endDate: this.endDate,
    tripUrl: this.tripLink,
    public: this.public,
    interests: this.interests,
    media: this.media,
    days: this.days
  };
}

const Trip = mongoose.model('Trip', tripSchema);

module.exports = {Trip};