import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CardActionArea> */}
        
        <CardContent>
        <CardMedia
          className={classes.media}
          image="https://static6.depositphotos.com/1100968/636/i/600/depositphotos_6366074-stock-photo-acropolis-at-sunset.jpg"
          title="Contemplative Reptile"
      style={{borderRadius:"3% 3% 3% 3%"}}  />
      
          <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"19px",marginLeft:"5px"}}>
            Lizard
          </Typography>
          <Typography style={{marginLeft:"5px"}} variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      {/* </CardActionArea>
      */}
    </div>
  );
}