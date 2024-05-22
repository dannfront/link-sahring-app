

function ProfilePhotoPreview({ user }) {

    return (
        <section className="bg-primary p-[6px] rounded-full w-[114px] h-[114px] flex justify-center items-center md:w-[130px] md:h-[130px]">
            <img className="w-full h-full rounded-full" src={`${user?.photo ?? ""}`} alt="" />
        </section>
    )
}

export default ProfilePhotoPreview
