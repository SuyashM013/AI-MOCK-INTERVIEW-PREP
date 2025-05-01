
import mongoose from 'mongoose';

const UserAnswerSchema = new mongoose.Schema({
  mockId: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  userAnswer: {
    type: String,
    required: true,
  },
  corrAns: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: () => new Date().toISOString(),
  },

});


const userAnswerModel = mongoose.models?.usersanswer || mongoose.model('usersanswer', UserAnswerSchema);
export default userAnswerModel;