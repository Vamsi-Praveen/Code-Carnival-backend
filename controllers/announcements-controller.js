import Announcements from "../models/Announcements.js";
export const getAllAnnouncements = async (req, res, next) => {
    try {
        await Announcements.find()
            .then((data) => {
                if (data) {
                    return res.send(data);
                }
                else {
                    return res.status(404).json({ message: "Announcements data not found!" });
                }
            });
    }
    catch (err) {
        return console.log(err);
    }
};
export const addAnnouncements = async (req, res, next) => {
    try {
        await Announcements.create(req.body)
            .then((data) => {
                return res.send(data);
            }).catch((err) => {
                return res.status(404).json({ message: "New Announcement data not inserted!" });
            });
    }
    catch (err) {
        console.log(err);
    }
};
export const deleteAnnouncements = async (req, res, next) => {
    const description = req.body.description;
    let found;
    try {
        found = await Announcements.findOneAndDelete(description);
        await found.save();
    }
    catch (err) {
        console.log(err);
    }
    if (!found) {
        return res.status(404).json({ message: "Unable to delete the announcement!" });
    }
    return res.status(200).json({ message: "Announcement successfully deleted!" });
}