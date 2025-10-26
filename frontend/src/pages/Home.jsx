import {useState, useEffect} from 'react';
    import axios from 'axios';


function Home(){
    const [users,setUsers]=useState([]);

    useEffect(()=>{
axios.get('http://localhost:5000/api/users/allUser').then(res=>setUsers(res.data)).catch(error=>console.log(error));
    },[]);
return (
    <div>
        <h1>User List</h1>
        <ul>
            {users.map(user=>(
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    </div>
);
};

export default Home;
