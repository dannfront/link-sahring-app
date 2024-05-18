function ListLinksPreview({link}) {
    let imgWhite
    if(link.img!==undefined) imgWhite=link.img.split("-")[1]==="frontend"?link.img:link.img.replace('grey','white')
    return (
        <li style={{backgroundColor:link.color}} className={`mb-5 last:mb-0  rounded-md p-3 ${link.platform==="Frontend Mentor"?"border border-l-light-grey":""} `}>
            <a href={`${link.url}`} className="flex gap-5">
                <img src={`../${imgWhite}`} alt={`${link.platform}`} />
                <p className={`${link.platform==="Frontend Mentor"?"text-black":"text-white"}`}>{link.platform}</p>
            </a>
        </li>
    )
}

export default ListLinksPreview

