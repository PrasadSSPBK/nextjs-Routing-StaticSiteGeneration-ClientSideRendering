
// Need when fallback true import {useRouter} from 'next/router'
function PostId({post}){
    //  Need when fallback true const router=useRouter()
    // if(router.isFallback){
    //     return(
    //         <h1>Loading......</h1>
    //     )
    // }
   
    return(
        <h1>  {post.title}</h1>
        // <h1>{post.body}</h1>
    )

}

export default PostId 

export async function getStaticPaths(){
    // const response=await fetch("https://jsonplaceholder.typicode.com/posts")
    // const data=await response.json()
    // const paths=data.map((eachPost)=>{
    //     return(
    //         {
    //             params:{postId:`${eachPost.id}`}
    //         }
    //     )
    // })
    return{
        // paths,fallback:true

        paths:[
            {
                params:{postId:"1"}
            }
            , {
                params:{postId:"2"}
            }, {
                params:{postId:"3"}
            }
        ],fallback:"blocking"
        // paths:[
        //     {
        //         params:{postId:"1"}
        //     }
        //     , {
        //         params:{postId:"2"}
        //     }, {
        //         params:{postId:"3"}
        //     }
        // ],fallback:true
    }
}


export async function getStaticProps(context){
    const {params}=context
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
   
    const data =await response.json()
    if(!data.id){
        return{
            notFound:true
        }
    }
    return {
        props:{
            post:data
        }  
     }

}