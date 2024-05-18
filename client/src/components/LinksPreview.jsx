
import ListLinksPreview from "./ListLinksPreview"

function LinksPreview({user}) {
    return (
        <ul className="w-[250px]">
            {user?.links.map(link=>(
                <ListLinksPreview  key={link.platform} link={link}/>
            ))}
        </ul>
    )
}

export default LinksPreview
