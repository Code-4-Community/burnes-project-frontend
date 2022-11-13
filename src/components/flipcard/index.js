import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { textAlign } from '@mui/system';

const card = { 
  width: 250, 
  height: 230,
  backgroundColor: '#D1C1EF'
}

const title = {
  color: '#236b42',
  fontFamily: 'aileron, sans-serif',
  textAlign: 'center',
  fontSize: '1.5em',
  marginTop: '20px'
}

const desc = {
  color: '#236b42',
  fontFamily: 'aileron, sans-serif',
  textAlign: 'center',
  marginTop: '30px',
  marginBottom: '20px'
}

export default function MediaCard({props}) {
  return (
    <Card style={card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={title}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={desc}>
          {props.desc}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}