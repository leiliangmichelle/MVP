import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox,IconButton, Typography, TextField, Stack} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import React from 'react'
import { Box } from '@mui/material'

const Feed = () =>{
//   const newPostBox = styled(Box)({

//   });

  return (
    <Box bgcolor='pink' flex={3.5} p={2}>
      <Stack direction="column" spacing={2}>
      <Box backgroundColor='blue'>
        <form method='POST' action='/upload' enctype='multipart/form-data'>
          <input type='file' name='image'></input>
          <input type='submit'></input>
        </form>
      <TextField id="outlined-basic" label="What's on your mind?" variant="outlined" onChange={()=>{
        console.log('event.target.value:', event.target.value)
      }}/>
      <Stack direction="row" spacing={2} justifyContent='space-evenly'>
      <AddAPhotoIcon></AddAPhotoIcon>
      <Button variant="contained">Share</Button>
      </Stack>
      </Box>

{/* card 1 */}
    <Card sx={{ margin: 5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="post">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Jenny Kim"
      subheader="November 17, 2022"
    />
    <CardMedia
      component="img"
      height="20%"
      image='/MVPNYC.jpeg'
      alt="NYC user post"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      On a birthday trip to NYC. The view was absolutely breath-taking! #EmpireStateOfMind #ILoveNY #BdayTrip #TotallyGorgorous
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>
  </Card>

{/* card 2 */}
    <Card sx={{ margin: 5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="post">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Emerson Jane"
      subheader="November 17, 2022"
    />
    <CardMedia
      component="img"
      height="20%"
      image='/MVPBurger.jpeg'
      alt="card 2"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      Today I was just craving a good old-fashioned burger, especially after a fuzzy morning of wine tasting. Gott’s Roadside in both SF and Napa hit the spot. Their Caesar salad was a little over-cheesed for me (hard to see the greens under that snowbank of parmesan) but their burgers and garlic fries were just what we needed. The milkshakes are also deliciously thick and creamy but very indulgent, yum! Oh, also, weather was great!
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>
  </Card>


  <Card sx={{ margin: 5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="post">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Jenny Kim"
      subheader="November 17, 2022"
    />
    <CardMedia
      component="img"
      height="20%"
      image='/MVPProsopal.jpeg'
      alt="Engage post"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      I said yes!
      <br></br>#DisneyLand #DreamComeTrue
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>
  </Card>


  <Card sx={{ margin: 5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="post">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Rennie Noa"
      subheader="November 17, 2022"
    />
    <CardMedia
      component="img"
      height="20%"
      image='/MVPPuppy.jpeg'
      alt="puppy user post"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      He is just the cutest!
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>
  </Card>
  </Stack>




</Box>

  )
}

export default Feed