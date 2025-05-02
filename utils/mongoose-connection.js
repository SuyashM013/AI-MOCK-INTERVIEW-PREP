
import * as mongoose from 'mongoose';
const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI;

if (!MONGO_URI) {
    throw new Error("MONGO_URI not found in env");
}

const connectDB = async () => {

    if (mongoose.connections && mongoose.connections[0].readyState) {
        // console.log("✅ Already connected to MongoDB");
        return;
    }


    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // console.log("✅ MongoDB connected");
};

export default connectDB;


