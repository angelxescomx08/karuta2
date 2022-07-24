import { FC } from "react";

import { useRouter } from "next/router";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Carta } from "../../utils";
import { KarutaSVG } from './KarutaSVG';



interface Props{
  carta: Carta;
}

export const KarutaCarta: FC<Props> = ({ carta }) => {

  const router = useRouter();
  const theme = useTheme();
  const {japanese,id,english,silaba} = carta;

  const handleClick = ()=>{
    router.push(`/poem/${id}`);
  }

  return (
    <Card onClick={handleClick}>
      <CardActionArea>
        <KarutaSVG poema={japanese}/>
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div"
            style={{color: theme.palette.text.primary}}>
            #{id} - {silaba}
          </Typography>
          <Typography 
            variant="body2" 
            style={{color: theme.palette.text.secondary}}>
            {english}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}