import {useRouter} from 'next/router'

function ProductId({productId}){
    const router=useRouter()

    if(router.isFallback){
        return(
            <h1>Loading......</h1>
        )
    }
    return(
        <h1>{productId.id}  {productId.description}  {productId.price}</h1>
    )

}

export default ProductId

export async function getStaticProps(context){
    
    const {params}=context
 
    const response=await fetch(`http://localhost:4999/products/${params.productId}`)

    const data=await response.json()
  
    return{
        props:{
            productId:data
        }
    }
}

export async function getStaticPaths(){
    return{
        paths:[
            {
                params:{productId:"1"}
            }
       
        ],
        fallback:true
    }
}