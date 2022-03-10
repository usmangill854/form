import { Button,Box,TextField,FormControl,form, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate , Redirect, Navigate } from 'react-router-dom';



const Login = ({setAuth}) => {
    
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

let nevigate = useNavigate()
const handleClick =async () => {

    console.log(email,password)

 

  const payLoad = {
    email,
    password
  }
  const {data} = await axios.post('http://localhost:3000/v1/login',payLoad)
  console.log(data.token)
  alert(data.token)
  localStorage.setItem('userInfo',JSON.stringify(data.token))
  
//   else
//   () => nevigate('/mainpage')   
}
  return (<>

    <Grid container  sx={{border:1, borderColor: 'primary.main' }}  marginTop={'15%'}  alignContent={'center'} direction={'column'} rowSpacing={'15'} >
    
   {/* <Box> */}<Grid item>
       <Button onClick={() => nevigate('/')} > Main Page</Button><br/>
          <TextField
          
          id="email-input"
          label="Email"
          type="email"
          autoComplete=""
          required
          onChange={(e) => setEmail(e.target.value)}
          // value={setData.email}
        />
        {/* </Box> 
        <Box> */}
        </Grid>
        <Grid item>
          <TextField
          id="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          
          // value={setData.password}
        />
        </Grid>
        <Grid item>
  <Button type='submit' variant="outlined"  onClick={handleClick} color="success">
  Login
</Button>

</Grid>
</Grid>
        {/* </Box> */}

  </>);
}
export default Login