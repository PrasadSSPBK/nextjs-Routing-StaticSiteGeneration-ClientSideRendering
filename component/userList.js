function UserList({users}){
    console.log(users)
    return(
        <div>
             <p >Name:{users.name}</p>
                    {/* <p style={{padding:"5px",color:"whitesmoke"}}><span style={{padding:"5px",color:"black"}}>Company Name:</span>{users.name}</p> */}
        </div>
    )
}
export default UserList