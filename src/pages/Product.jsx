import { useParams } from "react-router-dom"

function Product() {
    const params = useParams()
    console.log(params);
    return (
        <>
            Product
        </>
    )
}

export default Product