import Coding_questions from "../models/Coding_questions";

export const getQuestions = async (req, res) => {
    try {
        await Coding_questions.find()
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((err) => {
                res.status(400).send('error occured')
            })
    } catch (error) {
        console.log("Error")
    }
}

export const getQuestionsById = async (req, res) => {
    try {   
        const id = req.params.id;
        await Coding_questions.findById(id)
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((err) => {
                res.status(400).send('error occured')
            })
    } catch (error) {
        console.log("Error")
    }
}

export const addQuestions = async (req, res) => {

    const id = req.body._id;
    console.log(req.body.questions)
    let data = await Coding_questions.findOne({ _id: id });
    if (!data) {
        await Coding_questions.create(req.body)
            .then((data) => {
                res.status(201).send({ message: 'Question added successfully' })
            })
            .catch((err) => {
                res.status(400).send("Data exisit")
            })
    }
    else {
        console.log(data)
        let new_data = [];
        new_data = [...data.questions, ...req.body.questions];
        data.questions = new_data;
        console.log(new_data)
        await data.save()
            .then((da) => {
                res.send(da)
            })
            .catch((err) => {
                res.send(err)
            })


    }
}

