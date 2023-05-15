import Link from "next/link";

export default function CategoryListView(categorys:[], now:string) {
    return (
        <nav className="category">            
        <ol>
        {categorys.map((category)=> {
            return (
                <li key={category} className={(now == category) ? 'on' : 'off'}>

                    <Link href={"/ProductList/"+category}>{category}</Link>
                </li>
            )
        })}
        </ol>
        </nav>
    );

}