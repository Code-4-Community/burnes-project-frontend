import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { borders } from '@mui/system';
import { shadows } from '@mui/system';

export default function PhaseCard(props) {
  return (
    <Card sx={{ minWidth: 275, borderRadius: '16px', boxShadow: 2 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ justifyContent: 'center' }}
        >
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ justifyContent: 'center' }}>
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
