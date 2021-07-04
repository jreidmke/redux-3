import data from "../data.json";
import Product from "./Product";

function List() {
    const pKeys = Object.keys(data.products);
    return(
        <div>
            <h1>HEY MAN, LOOK WHAT'S IN YOUR CART!</h1>
            {pKeys.map(k => 
                <Product key={k} p={data.products[k]} uuid={k}/>
            )}
        </div>
    )
};

export default List;