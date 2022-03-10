import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function PrivatePage(auth) {

const token = localStorage
    const api = 'http://localhost:3000/v1'
    const headers = {
        'authorization' : `Bearer ${token}`
    }
    const check = axios.get(api,{
        headers:headers
    }).then((res) => {
        if(res.status === 200){
            return console.log('successs')
        }else {
            throw Error(res.status)
        }
    })
    console.log(token.authorization, 'headersss' )
  return ( <>
      
     <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <Badge>Private</Badge>
      </StyledBadge>
    </IconButton>
    
  
  </>

  )
}

   