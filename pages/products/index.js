function Products({products}){
    return (
        products.map((eachProduct)=>{
            return(
                <div key={eachProduct.id}>
                    <h1>{eachProduct.id}  {eachProduct.description}  {eachProduct.price}</h1>
                </div>
            )
        })
    )

}
export default Products

export async function getStaticProps(){
    const response=await fetch('http://localhost:4999/products')
    const data=await response.json()
    console.log("regenerating")
    return{
        props:{
            products:data
        },
        revalidate:10
    }
}