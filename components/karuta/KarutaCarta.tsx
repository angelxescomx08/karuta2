import { FC } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Carta } from "../../utils";
import { KarutaSVG } from './KarutaSVG';
import { useRouter } from "next/router";

interface Props{
  carta: Carta;
}

export const KarutaCarta: FC<Props> = ({ carta }) => {

  const router = useRouter();
  const {japanese,id,english,silaba} = carta;

  const handleClick = ()=>{
    router.push(`/poem/${id}`);
  }

  return (
    <Card onClick={handleClick}>
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