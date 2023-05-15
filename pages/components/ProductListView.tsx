import ProductView from "./ProductView";

export default function ProductListView(items:[]) {
    return (
        <>
        <ol className="productList">
            {items.map(item => (
                ProductView(item)
            )
            )}               
            <li></li>
        </ol>
        </>
    )
}