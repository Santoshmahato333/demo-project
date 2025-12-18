
import Product from "./product";
async function productList(){
    const response=await fetch("https://dummyjson.com/products");
    const data=await response.json();
    return data.products;
}
export default async function ProductListPage(){
    const products=await productList();
    return(
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product: { id: number; title: string; price: number }) => (
                    <li key={product.id} className="{{style:margin-left:20px}}">
                        Name: {product.title}
                        {/* Render Product component with price prop */}
                        <Product price={product.price}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}