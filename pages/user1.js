import UserList from "../component/userList"

function User1(props){
    const {users}=props
    return(
        <>
        <h1>LIst of Users</h1>
        {users.map((eachUser)=>{
            return(
                <div key={eachUser.id} style={{backgroundColor:"blue",margin:"5px"}}>
                    <UserList users={eachUser}/>
                </div>
            )
        })}
        </>
    )
}
export default User1

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