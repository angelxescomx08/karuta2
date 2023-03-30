'use client'
import { NextPage } from 'next';
import { MainLayout } from '../../components/layouts';
import { Carta, cartas } from '../../utils';
import { PoemLayout } from '../../components/layouts';


const PoemPage: NextPage<{ params: { id: string } }> = ({ params }: { params: { id: string } }) => {


    const carta = cartas.find((carta) => carta.id === params.id)

    return (
        <MainLayout
            title='Karuta app | poem'
        >
            <PoemLayout carta={carta} />
        </MainLayout>
    )
}

export default PoemPage