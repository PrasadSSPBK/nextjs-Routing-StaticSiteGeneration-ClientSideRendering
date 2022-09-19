import Link from 'next/link'


function Posts(props){

    const {posts}=props
    return(
        <div>
            <h1>List of Posts</h1>
            {posts.map((eachPost)=>{
                return(
                    <div key={eachPost.id}>
                        <Link href={`posts/${eachPost.id}`} passHref>
                        
                    <h1>{eachPost.id}  {eachPost.title}</h1>
                    </Link>
                    {/* <h1>{eachPost.body}</h1> */}
                    <hr/>
                    <br/>
                    </div>
                )
            })}
        </div>    )

}
export default Posts

export async function  getStaticProps(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await response.json()
    return{
        props:{
            posts:data
        }
    }
} 