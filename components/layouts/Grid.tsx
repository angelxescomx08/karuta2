import Grid from '@mui/material/Grid';
import { cartas } from '../../utils';
import { KarutaCarta } from '../karuta/KarutaCarta';

export const GridCartas = () => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }}>
            {
                cartas.map((carta, index) => (
                    <Grid justifyContent='center' item xs={12} sm={4} md={4} xl={3} key={index}>
                        <KarutaCarta carta={carta} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
