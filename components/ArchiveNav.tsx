import Link from "next/link";


const items = [

{
label:"ARCHIVE HOME",
icon:"⌂",
href:"/"
},

{
label:"COLLECTIONS",
icon:"▰",
href:"/collections"
},

{
label:"RECORDS",
icon:"▤",
href:"/records"
},

{
label:"RECOVERIES",
icon:"◇",
href:"/recoveries"
},

{
label:"BOOKS",
icon:"▱",
href:"/books"
},

{
label:"CREATOR ENGINE",
icon:"◉",
href:"/creator/publishing"
},

{
label:"PUBLISHING STUDIO",
icon:"▣",
href:"/studios/publishing"
},

{
label:"STUDIOS",
icon:"◌",
href:"/studios"
},

{
label:"ARCHIVE ID",
icon:"◎",
href:"/dossier"
},

{
label:"PLATFORM",
icon:"◈",
href:"/platform"
}

];


export default function ArchiveNav(){

return (

<aside className="archive-sidebar">


<div className="archive-trigger">
☰
</div>


<div className="archive-menu">


{items.map(item=>(

<Link
key={item.href}
href={item.href}
className="archive-link"
>

<i>
{item.icon}
</i>


<strong>
{item.label}
</strong>


</Link>

))}


</div>


</aside>

)

}
