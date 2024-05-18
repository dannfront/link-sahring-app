function ListLinks({link,onHandleSelectPlarform}) {
    const {img,app,color}=link
    return (
        <li onClick={()=>onHandleSelectPlarform(app,img,color)} className="flex gap-2 p-2 border-b border-light-grey cursor-pointer last:border-none">
            <img src={`../${img}`} alt="" />
            <span>{app}</span>
        </li>
    )
}

export default ListLinks
