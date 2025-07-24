// Fill name: Contact.tsx
export default function Contact({ladel,link,icon} : {ladel:any,link:any,icon:any}){
    return (
        <div className="w-16">
            <a href={link}>
                <img src={icon} className="w-full" title={ladel} />
            </a>
        </div>
    )
}