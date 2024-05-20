
const URL_LOGIN = import.meta.env.VITE_BACK_URL || "http://localhost:3002"
function ProfilePhotoPreview({ user }) {

    return (
        <section className="bg-primary p-[6px] rounded-full w-[114px] h-[114px] flex justify-center items-center md:w-[130px] md:h-[130px]">
            <img className="w-full h-full rounded-full" src={`${URL_LOGIN}/${user?.photo ?? ""}`} alt="" />
        </section>
    )
}

export default ProfilePhotoPreview
