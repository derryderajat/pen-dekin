const { Schema, model, models } = require('mongoose');
const shortID = require('shortid');
const UrlSchema = new Schema({
  code: {
    type: String,
    unique: true,
    default: shortID.generate,
    min: [5, 'Alias is too short, min 5 words'],
  },
  url: { type: String, require: true },
  clicked: { type: Number, default: 0 },
});

const Urls = models.Urls || model('Urls', UrlSchema);

export default Urls;
