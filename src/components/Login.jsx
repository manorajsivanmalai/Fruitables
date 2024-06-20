
import { useState } from "react";
import '../components/Login.css';
const Login = ({setLoginSuccess}) => {
const [active, setActive] = useState({
    login: true,
    siginup: false
});
const [users, setUsers] = useState({
    username: '',
    password: '',
    password1: ''
});

const handleSubmit=(e)=>{
    e.preventDefault();

    const usersCretendial={
        username:users.username,
        password:users.password,
        password1:users.password1
    };
    
   

    if(active.siginup){
           
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usersCretendial)
      }).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    }
    else{
 
        fetch('http://localhost:3000/users').then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            const user = data.find(user => user.username === usersCretendial.username && user.password === usersCretendial.password);
            if (user) {
                setLoginSuccess(true);
              console.log('User found:', user);
            } else {
                setLoginSuccess(false);
              console.log('User not found');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }
}

  return (
 <div className='container-fluid bg-dark ajithpool'>
    <div className='Sigin'>
              <div className='sigin-sub'>
                <h2>Sigup form</h2>
            <div className='sigin-btn'>
                <button onClick={() => setActive({login: true, siginup: false})} style={{backgroundColor:active.login?'#81c408':'blue'}}>login</button>
               <button onClick={() => setActive({login: false, siginup: true})}  style={{backgroundColor:active.siginup?'#81c408':'blue'}}>siginup</button>
            </div>
               <form action="" className='sigin-form' onSubmit={(e)=>handleSubmit(e)}>
                    <input type="text" placeholder='Enter User Name'  value={users.username} onChange={(e)=>setUsers({...users,username:e.target.value})} required/>
                    <input type="password"  placeholder='Enter Password'  value={users.password} onChange={(e)=>setUsers({...users,password:e.target.value})} required/>
                    <input type="password" placeholder='Confirm Password'  value={users.password1} onChange={(e)=>setUsers({...users,password1:e.target.value})} style={{display: active.siginup ? 'block' : 'none'}}/>
                    <button type="submit">sigin Up</button>
                </form>
           
              </div>
    </div>
 </div>
  )
}
export default Login