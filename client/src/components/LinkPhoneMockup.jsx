function LinkPhoneMockup({x,y,link}) {
    let imgWhite
    if(link.img!==undefined) imgWhite=link.img.split("-")[1]==="frontend"?link.img:link.img.replace('grey','white')
    
    return (
        <foreignObject x={x} y={y} width="237" height="44">
            <div style={{backgroundColor:link.color}} className={`p-2 flex gap-3 h-10 items-center bg-White-bone rounded-md ${link.platform==="Frontend Mentor"?"border border-l-light-grey":""}`} xmlns="http://www.w3.org/1999/xhtml">
                
                {link.img && <img src={`../${imgWhite}`} alt="description" />}
                {!link.paltform && <p className={`text-sm ${link.platform==="Frontend Mentor"?"text-black":"text-white"}`}>{link.platform}</p>}
            </div>
        </foreignObject>
    )
}

export default LinkPhoneMockup
