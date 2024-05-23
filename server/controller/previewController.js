import User from "../model/userModel.js"
import { getImageBucket } from "../utils/functionsS3.js"

export default async function previewController(req, res, next) {

    try {
        const { id } = req.params

        const user = await User.findById(id).select("-_id")
        if (!user) throw new Error("user not fund")
        const dataImageAws = await getImageBucket(user.photo)
        user.photo = dataImageAws


        res.status(200).json({
            satatus: "succes",
            user
        })

    } catch (error) {
        next(error)
    }


}