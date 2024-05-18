import DescriptionSectionSecondary from "./DescriptionSectionSecondary"

function Started() {
    return (
        <section className=" bg-White-bone rounded-xl mt-5 py-10 px-2">
            <div >
                <img className="mx-auto" src="./images/illustration-empty.svg" alt="" />
            </div>
            <DescriptionSectionSecondary isClass=" text-center" title='Let’s get you started' descrition='Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!'/>
        </section>
    )
}

export default Started
