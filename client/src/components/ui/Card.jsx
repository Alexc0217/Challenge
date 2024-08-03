import React from 'react';
import {default as CardMui} from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { COMPANY } from '../../navigation/routes';
import { pathWithParams } from '../../utils/pathWithParams';

export default function Card(props) {
  const navigate = useNavigate();

  return (
    <CardMui sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigate(pathWithParams(COMPANY.SHOW, {id: props.id}))}>
        <CardMedia
          component="img"
          height="300"
          image={props.image}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large">Ver empresa</Button>
        </CardActions>
      </CardActionArea>
    </CardMui>
  );
}
