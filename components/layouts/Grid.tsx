import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { cartas } from '../../utils';
import { KarutaCarta } from '../karuta/KarutaCarta';

import { fromEvent, map } from 'rxjs';

const calcularPorcentajeScroll = (event: any):number =>{
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop/(scrollHeight-clientHeight)*100);
}

export const GridCartas = () => {

    const [limit,setLimit] = useState(10);

    useEffect(()=>{
        const subscription = fromEvent<Event>(document,'scroll').pipe(
            map(calcularPorcentajeScroll)
        )
        .subscribe((porcentaje)=>{
            if(porcentaje>60 && limit<100){
                setLimit(l=>l+10)
            }
        });

        return ()=>{
            subscription.unsubscribe();
        }
    },[limit])

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }}>
            {
                cartas.filter((_,i)=>i<limit).map((carta, index) => (
                    <Grid justifyContent='center' item xs={12} sm={4} md={4} xl={3} key={index}>
                        <KarutaCarta carta={carta} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
