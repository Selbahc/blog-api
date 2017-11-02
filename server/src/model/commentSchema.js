import mongoose from 'mongoose';
import moment from 'moment';

const commentSchema = mongoose.Schema({
  author: {type: String, required: true},
  title: {type: String, required: true},
  message: {type: String, required: true},
  date: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a')
  },
  // article: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Article'
  // }
}, {versionKey: false});

export default mongoose.model('Comment', commentSchema);
