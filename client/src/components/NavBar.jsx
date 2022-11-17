import React from 'react';
import { AppBar, Toolbar, styled, Typography, InputBase, Box, Badge, Avatar} from '@mui/material'
import { Mail, Notifications } from "@mui/icons-material";
import { borderRadius } from '@mui/system'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent:'space-between'
})

const Search = styled('div')(({theme})=>({
  backgroundColor:'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}))

const Icons = styled(Box)(({ theme }) =>({
  display:'none',
  alignItems:'center',
  gap:'20px',
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}))

const UserBox = styled(Box)(({ theme }) =>({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  [theme.breakpoints.up("sm")]: {
    display: "none",
  }
}))

const NavBar = () =>{
  return (
    <AppBar position='sticky'>

      <StyledToolbar>
        <Typography variant='h6'>WeShare</Typography>
        <Search><InputBase placeholder='search...'></InputBase></Search>
        <Icons>
        <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='secondary'>
            <Notifications />
          </Badge>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src="/profile-pic.jpeg"
          />
        </Icons>
        <UserBox>
        <Avatar
            sx={{ width: 30, height: 30 }}
            src="/profile-pic.jpeg"
          />
          <Typography variant='span'>Lei Liang</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
    )
}

export default NavBar