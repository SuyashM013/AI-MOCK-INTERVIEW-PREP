
import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    mockId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    jsonMockResp: {
        type: String,
        required: true
    },
    jobPosition: {
        type: String,
        required: true,
        trim: true
    },
    jobDescription: {
        type: String,
        required: true,
        trim: true
    },
    jobExperience: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: String
    },
    
});



const userModel = mongoose.models['users'] || mongoose.model('users', UserSchema);
export default userModel;