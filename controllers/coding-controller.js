import Coding from "../models/Coding";
export const getAllCoding = async (req, res, next) => {
    try {
        await Coding.find()
            .then((data) => {
                if (data) {
                    res.send(data);
                }
                else {
                    res.status(404).json({ message: "Coding data not found!" });
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
                    res.status(404).json({ message: "Coding data not found!" });
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
                    res.status(201).send(data);
                }).catch((err) => {
                    res.status(404).json({ message: "Coding data not inserted!" });
                });
        }
        else {
            res.status(501).json({ message: "Coding data already exists on that date!" });
        }
    }
    catch (err) {
        return console.log(err);
    }
};
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