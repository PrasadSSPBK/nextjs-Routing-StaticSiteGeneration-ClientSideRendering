
function UserList(props){
    const {users}=props
    return(
        <>
        <h1>LIst of Users</h1>
        {users.map((eachUser)=>{
            return(
                <div key={eachUser.id} style={{backgroundColor:"blue",margin:"5px"}}>
                    <p style={{padding:"5px",color:"whitesmoke",fontWeight:"bold"}}>Name:{eachUser.name}</p>
                    <p style={{padding:"5px",color:"whitesmoke"}}><span style={{padding:"5px",color:"black"}}>Company Name:</span>{eachUser.company.name}</p>
                </div>
            )
        })}
        </>
    )
}
export default UserList

export async function getStaticProps(){
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await response.json()
    // console.log(data)
    return(
        {
            props:{
                users:data
            }
        }
    )
}