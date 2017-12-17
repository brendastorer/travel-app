const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
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
          country: String,
          sites: [
            {
              name: String,
              website: String
            }
          ]
        }
      ]
    }
  ]
});

tripSchema.virtual('tripLink').get(function(){
  return `/trips/${this.id}`;
});

tripSchema.virtual('eachDay').get(function(){
  const getDates = function(firstDate, lastDate) {
    let dates = [],
    addDays = function(days) {
      let date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    while (firstDate <= lastDate) {
      dates.push(firstDate);
      firstDate = addDays.call(firstDate, 1);
    }
    return dates;
  };

  const dates = getDates(new Date(this.startDate), new Date(this.endDate));                                                                                                             
  const daysAsObjects = dates.map(function(date) {
    return {
      "calendarDate": date
    };
  });

  return daysAsObjects;
});

tripSchema.methods.apiRepr = function() {
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
    days: this.eachDay
  };
}

const Trip = mongoose.model('Trip', tripSchema);

module.exports = {Trip};