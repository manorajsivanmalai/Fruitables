import { useState } from "react";
import '../components/Login.css';
import axios from 'axios';
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

const handleSubmit= (e)=>{
    e.preventDefault();

    const usersCretendial={
        username:users.username,
        password:users.password,
        password1:users.password1
    };
 
    if(active.siginup){
      axios.post('/.netlify/functions/users', {
        username:usersCretendial.username,
        password:usersCretendial.password,
      })
      .then(function (response) {
       console.log(response.data)
       setUsers('');
      })
      .catch(function (error) {
        console.log(error);
      });

    }
    else{
      async function fetchItems() {
        axios.get('/.netlify/functions/users')
        .then(response => {
          const user = response.data.find(user => user.username === usersCretendial.username && user.password === usersCretendial.password);
          if (user) {
              setLoginSuccess(true);
            console.log('User found:', user);
          } else {
              setLoginSuccess(false);
            console.log('User not found');
          }
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
        });
      
    
      }
      fetchItems();
    
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
                <div className="skip">
                <button onClick={(e)=>setLoginSuccess(true)} className="btn-skip">skip</button>
                </div>
              </div>
    </div>
 </div>
  )
}
export default Login