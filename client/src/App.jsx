import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Box, Stack} from '@mui/material';
// import Button from '@mui/material/Button';
// const axios = require('axios');
import Feed from './components/Feed.jsx'
import LeftBar from './components/LeftBar.jsx'
import RightBar from './components/RightBar.jsx'
import NavBar from './components/NavBar.jsx'//built in webpack,
//url is a html thing so put it in public folder, not in assets

function App() {
  return (
    <Box>
      <NavBar></NavBar>
      <Stack direction='row' spacing={2} justifyContent="space-between">
      {/* <h1>hello world</h1> */}
      <LeftBar>LeftBar</LeftBar>
      <Feed>Feed</Feed>
      <RightBar>RightBar</RightBar>
      </Stack>
    </Box>
  );
}

export default App;
