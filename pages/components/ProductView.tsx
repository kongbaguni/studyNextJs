import Image from "next/image";
import Link from "next/link";

export default function ProductView(item:{}) {
    return (
        <li key={item.id}>                        
        <Image src={item.image} alt={item.title} width={100} height={100} />
        <ul>
            <li><b>{item.category}</b></li>
            <li>
                <Link href={"/Product/"+item.id}>
                    <h2>{item.title}</h2>
                </Link>
            </li>
            <li>rate : <b>{item.rating.rate}</b> count : <b>{item.rating.count}</b> </li>
            <li>Price : <b>${item.price}</b></li>
        </ul>                    
        </li>
    )
}