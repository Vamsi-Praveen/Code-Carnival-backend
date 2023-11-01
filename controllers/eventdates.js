import EventDates from "../models/EventDates";


export const getEvent = async (req, res) => {
    try {
        await EventDates.find()
            .then((data) => {
                res.send(data).status(200)
            })
            .catch(err => {
                res.status(400).send("Error")
            })
    }
    catch (error) {
        console.log("error")
    }
}

export const addEventDate = async (req, res) => {
    try {
        console.log(req.body)
        await EventDates.create(req.body)
            .then((data) => {
                res.send(data).status(201)
            })
            .catch(err => {
                res.status(400).send("Error occured ")
            })
    }
    catch (err) {
        console.log("Error")
    }
}