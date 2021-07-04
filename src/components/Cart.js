import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Product from "./Product";

function Cart() {
    const cart = useSelector(store => store.cart, shallowEqual);

    return(
        <div>
            {cart.map(p =>
                <Product p={p.info} uuid={p.id}/>
            )}
        </div>
    )
};

export default Cart;