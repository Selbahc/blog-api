import mongoose from 'mongoose';

export default (url) => {
  mongoose.connect(url, () => console.log('Connected to database'));
}
