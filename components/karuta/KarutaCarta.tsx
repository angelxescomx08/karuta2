import { FC } from "react";
import { KarutaSVG } from './KarutaSVG';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Carta } from "../../utils";

interface Props{
  carta: Carta;
}

export const KarutaCarta: FC<Props> = ({ carta }) => {

  const {japanese,id,english,silaba} = carta;

  return (
    <Card>
      <CardActionArea>
        <KarutaSVG poema={japanese}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            #{id} - {silaba}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {english}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}