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
    marginTop:16
  },
  media: {
    height: 200,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.lyonaeroports.com/sites/default/files/styles/adl_medium/public/2020-05/athenes-header.jpg?itok=9xp3IjJs"
          title="Contemplative Reptile"
        />
        <CardContent style={{backgroundColor:"#FAFAFA"}}>
          <Typography gutterBottom variant="h5" component="h2">
          The Best of Athense in 2 Hours

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          €90 for 1-4 2 Hours - Up to 7 stops
         
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}
