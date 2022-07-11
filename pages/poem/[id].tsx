import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { MainLayout } from '../../components/layouts';
import { Carta, cartas } from '../../utils';
import { useTheme } from '@mui/material/styles';

interface Props{
    carta: Carta;
}

const PoemPage: NextPage<Props> = ({carta}) => {

    const { id, silaba } = carta;
    const theme = useTheme();

    return (
        <MainLayout
            title={`Karuta app | poem ${id} ${silaba}`}
            description={`karuta poem ${id} ${silaba}`}
            keywords={`poem`}>
            <h1 style={{
                color: theme.palette.text.primary
            }}>Poem {id}</h1>
        </MainLayout>
    )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    return {
        paths: cartas.map(({id})=>({
            params: {
                id
            }
        })),
        fallback: false
    }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({params}) => {

    const {id} = params as {id: string};
    const carta = cartas.find((carta)=> carta.id === id)

    return {
        props: {
            carta
        }
    }
}

export default PoemPage