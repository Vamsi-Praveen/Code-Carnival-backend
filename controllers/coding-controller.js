import Coding from "../models/Coding.js";
export const getAllCoding = async (req, res, next) => {
    try {
        await Coding.find()
            .then((data) => {
                if (data) {
                    return res.send(data);
                }
                else {
                    return res.status(400).json({ message: "Coding data not found!" });
                }
            });
    }
    catch (err) {
        return console.log(err);
    }
};
export const getDateCoding = async (req, res, next) => {
    try {
        const identifier = req.params.id;
        await Coding.findById(identifier)
            .then((data) => {
                if (data) {
                    return res.send(data);
                }
                else {
                    return res.status(300).json({ message: "Coding data not found!" });
                }
            });
    }
    catch (err) {
        return console.log(err);
    }
};
export const insertCoding = async (req, res, next) => {
    const _id = req.body._id;
    try {
        const Objv = await Coding.findOne({ "_id": _id });
        if (!Objv) {
            await Coding.create(req.body)
                .then((data) => {
                    return res.status(201).send(data);
                }).catch((err) => {
                    console.log(err)
                    return res.status(404).json({ message: "Coding data not inserted!" });
                });
        }
        else {
            return res.status(501).send("Coding data already exists on that date!");
        }
    }
    catch (err) {
        return console.log(err);
    }
};

export const updateCoding = async (req, res, next) => {
    const _id = req.params.id;
    try {
        const Objv = await Coding.findOne({ "_id": _id });
        // console.log(Objv)
        if (Objv) {
            await Objv.updateOne(
                { $set: req.body },
            )
                .then((data) => {
                    return res.status(200).send(data);
                }).catch((err) => {
                    console.log(err)
                    return res.status(404).json({ message: "Coding data not updated!" });
                });
        }
        else {
            return res.status(404).send('not found')
        }
    }
    catch (err) {
        return console.log(err);
    }
};
export const updateQuestions = async (req, res) => {
    const _id = req.params.id
    try {
        const obj = await Coding.findOne({ _id: _id });
        if (!obj) { return res.status(404).send('Not Found!') }
        for (let i in req.body.questions) {
            obj.questions.push(req.body.questions[i])
        }
        await obj.save()
            .then((data) => {
                return res.send(obj).status(200)
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send(err)
            })
    }
    catch (err) {
        return res.status(404).send('Not Found')
    }
}

export const deleteCoding = async (req, res, next) => {
    const id = req.body._id;
    let found;
    try {
        found = await Coding.findOneAndDelete({ "_id": id });
    }
    catch (err) {
        console.log(err);
    }
    if (!found) {
        return res.status(404).json({ message: "Unable to delete the the coding data!" });
    }
    return res.status(200).json({ message: "Coding data successfully deleted!" });
}