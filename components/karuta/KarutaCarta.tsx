import { FC } from "react";
import { KarutaSVG } from './KarutaSVG';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Props {
  poema: string;
}

export const KarutaCarta: FC<Props> = ({ poema }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <KarutaSVG poema={poema}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}