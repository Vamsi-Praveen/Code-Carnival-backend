import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    questions: [
        {
            description: {
                type: String,
                required: true
            },
            round: {
                type: String,
                required: true
            },
            marks: {
                type: String,
                required: true
            }
        }
    ]
}, { collection: "coding_questions" })

export default mongoose.model('coding_questions', questionsSchema);