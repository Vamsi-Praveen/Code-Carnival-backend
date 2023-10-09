import Gallery from "../models/Gallery";
export const getGallery = async (req, res, next) => {
    try {
        await Gallery.find()
            .then((data) => {
                if (data) {
                    res.send(data);
                }
                else {
                    res.status(404).json({ message: "Gallery data not found!" });
                }
            });
    }
    catch (err) {
        return console.log(err);
    }
};
export const insertGallery = async (req, res, next) => {
    // console.log(req.body.imageurl);
    const { imageurl } = req.body;
    try {
        await Gallery.create(req.body)
            .then((data) => {
                res.send(data);
            }).catch((err) => {
                res.status(404).json({ message: "Gallery data not inserted!" });
            });
    }
    catch (err) {
        return console.log(err);
    }
};