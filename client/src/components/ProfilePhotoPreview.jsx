

function ProfilePhotoPreview({user}) {
    return (
        <section className=" bg-primary rounded-full size-[114px] flex justify-center items-center md:size-[130px]">
            <img className="rounded-full w-[90%]" src={`http://localhost:3002/${user?.photo ?? ""}`} alt="" />
        </section>
    )
}

export default ProfilePhotoPreview
