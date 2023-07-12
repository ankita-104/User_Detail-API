

const  UserData =({users}) =>{
    return(
        <>
        {
            users.map((indiv, id)=>{
            return(
                <tr key={id}>
                    <td>{indiv.id}</td>
                    <td>{indiv.name}</td>
                    <td>{indiv.username}</td>
                    <td>{indiv.email}</td>
                    {/* <td>{data.address}</td> */}
                </tr>
            )
            })
        }
        </>
    )
}
export default UserData;