import UserRegistration from "../models/UserRegistration.js";
export const getAllRegistrations = async (req, res, next) => {
    try {
        await UserRegistration.find()
            .then((data) => {
                if (data) {
                    return res.send(data);
                }
                else {
                    return res.status(404).json({ message: "No user registrations found!" });
                }
            });
    }
    catch (err) {
        return console.log(err);
    }
};
export const registerUser = async (req, res, next) => {
    let existingUser;
    try {
        const { rollno, hackerrank, coding_date } = req.body;
        existingUser = await UserRegistration.findOne({ rollno: rollno, hackerrank: hackerrank, coding_date: coding_date });
        if (existingUser) {
            return res.status(300).json({ message: "User already registered!" });
        }
        else {
            await UserRegistration.create(req.body)
                .then((data) => {
                    return res.status(201).send(data);
                }).catch((err) => {
                    console.log(err)
                    return res.status(404).json({ message: "User Registration data not inserted!" });
                });
        }
    }
    catch (err) {
        return console.log(err);
    }
};