import User from "../model/userModel.js"

export default async function previewController(req, res, next) {

    try {

        const { id } = req.params

        const user = await User.findById(id).select("-_id")
        if (!user)  throw new Error("user not fund")


        res.status(200).json({
            satatus: "succes",
            user
        })

    } catch (error) {
        next(error)
    }


}