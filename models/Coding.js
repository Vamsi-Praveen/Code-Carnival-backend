import mongoose from "mongoose";
const Schema = mongoose.Schema;
const codingSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    winner: {
        name: {
            type: String,
            required: true
        },
        dept: {
            type: String,
            required: true
        },
        roll: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    runner: {
        name: {
            type: String,
            required: true
        },
        dept: {
            type: String,
            required: true
        },
        roll: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    "completed": {
        type: Boolean,
        required: true
    },
    dept_conducted: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    coordinator: {
        type: String,
        requried: true
    },
    questions: [
        {
            round: String,
            name: String,
            link: String,
        }
    ],
    participants: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    report: {
        type: String,
        required: true
    },
    coordinator_image:{
        type:String,
        required:true
    }

}, { collection: "coding" });
export default mongoose.model("Coding", codingSchema);
// coding