import React from 'react'
import { Box, Typography, Stack } from '@mui/material'


const RightBar = () =>{
  return (
    <Box bgcolor='pink' flex={1.5} p={2} sx={{ display: {xs:'none', sm:'block'}}}>RightBar
    <Stack direction='column' spacing={2}>
    <Typography variant="h6">Trending Topics</Typography>
    <img src='/Ukraine.jpeg' width='90%'></img>
    <Typography variant="h7">#StandWithUkraine</Typography>
    <Typography variant="h11">Click here for the latest news on Ukraine and how you can help out</Typography>
    <img src='/stopAsianHate.jpeg' width='90%'></img>
    {/* this is like an API  */}
    <Typography variant="h7">#StopAsianHate</Typography>
    <img src='/bigTechHiringFreeze.jpeg' width='90%'></img>
    {/* this is like an API  */}
    <Typography variant="h7">#BigTechHiringSlowDown</Typography>
    <Typography variant="h6">Other</Typography>
    <Typography variant="h8">#RoeVWade</Typography>
    <Typography variant="h8">#WomenRights</Typography>
    <Typography variant="h8">#Covid19SecondBooster</Typography>
    <Typography variant="h8">#HackReactor</Typography>
    <Typography variant="h8">#MVP</Typography>
    </Stack>
    </Box>
    )
}

export default RightBar