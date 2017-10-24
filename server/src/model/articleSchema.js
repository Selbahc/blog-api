import mongoose from 'mongoose';
import moment from 'moment';

const articleSchema = mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  content: {type: String, required: true},
  date: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a')
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {versionKey: false});

export default mongoose.model('Article', articleSchema);
