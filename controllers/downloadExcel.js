import UserRegistration from "../models/UserRegistration.js";
import exceljs from "exceljs";
export const download_excel = async (req, res) => {
    const date = req.params.id;
    // console.log(date)
    try {
        const workbook = new exceljs.Workbook();
        const worksheet = workbook.addWorksheet("Users")
        worksheet.columns = [
            { header: "Name", key: "name" },
            { header: "RollNo", key: "rollno" },
            { header: "Department", key: "dept" },
            { header: "Year", key: "year" },
            { header: "HackkerankId", key: "hackerrank" }
        ]
        const userdata = await UserRegistration.find({ "coding_date": date });
        if (!userdata) {
            return res.status(404)
        }
        userdata.forEach((user) => {
            worksheet.addRow(user)
        })
        var attachment_name = date + '.xlsx';
        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        )
        res.setHeader(
            'Content-Disposition',
            'attachment; filename=' + attachment_name
        )

        return workbook.xlsx.write(res).then(() => {
            res.status(200);
        })

    }
    catch (err) {
        console.log(err)
    }
}
export const contestav = async (req, res) => {
    const date = req.params.id;
    try {
        UserRegistration.find({ "coding_date": date })
            .then((result) => {
                res.send(result)
            })
    }
    catch (err) {
        console.log(err)
    }
}