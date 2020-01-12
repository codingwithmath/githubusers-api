const {Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const DevSchema = new Schema ({
  name: {
    type: String,
    require: true
  },
  user: {
    type: String,
    required: true
  },
  bio: String,
  avatar: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

DevSchema.plugin(mongoosePaginate);
module.exports = model('Users', DevSchema)