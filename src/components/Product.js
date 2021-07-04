import { useSelector, useDispatch, shallowEqual } from "react-redux";
import data from "../data.json";

function Product({p, uuid}) {
    const cart = useSelector(store => store.cart, shallowEqual);
    const dispatch = useDispatch();

    function add(id) {
        dispatch({
            type: "ADD",
            payload: {id: id, info: data.products[id]}
        })
    }

    function remove(id) {
        dispatch({
            type: "REMOVE",
            payload: {uuid: id}
        })
    }

    console.log(cart)

    return(
        <div>
            <button onClick={() => add(uuid)}>add</button>
            <button onClick={() => remove(uuid)}>remove</button>
            <h1>{p.name}</h1>
            <h6>${p.price}</h6>
            <small>{p.description}</small>
        </div>
    )
}

export default Product;