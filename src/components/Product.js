
function Product({p}) {
    return(
        <div>
            <h1>{p.name}</h1>
            <h6>${p.price}</h6>
            <small>{p.description}</small>
        </div>
    )
}

export default Product;