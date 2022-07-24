import { FC } from "react";

import Grid from "@mui/material/Grid";

import { Carta } from "../../utils";
import { KarutaSVG } from "../karuta";
import { PoemInfo } from "../karuta/PoemInfo";

interface Props{
    carta: Carta;
}

export const PoemLayout: FC<Props> = ({carta}) => {
  return (
    <Grid container spacing={2}>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <KarutaSVG poema={carta.japanese}/>
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
            <PoemInfo carta={carta}/>
        </Grid>
    </Grid>
  )
}
