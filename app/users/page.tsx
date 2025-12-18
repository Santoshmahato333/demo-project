async function userList(){
    const getData=await fetch("https://dummyjson.com/users");
    const data=await getData.json();
    return data.users;

}

const page = async () => {
    const userdetails=await userList();
    console.log("user details:",userdetails);
  return (
    <div>
        <h1>User List Page</h1>
        <ul>
            {userdetails.map((user:{id:number,firstName:string,lastName:string})=>(
                <li key={user.id}>
                    Name:
                    {user.firstName} lastName:{user.lastName}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default page