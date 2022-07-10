import { FC } from "react"

interface Props {
    poema: string;
}

export const KarutaSVG: FC<Props> = ({ poema }) => {
    return (
        <svg width="100%" height={400}
            xmlns="http://www.w3.org/2000/svg"
            style={{
                backgroundColor: '#000',
                color: '#fff',
            }}>
            <switch>
                <foreignObject width="100%" height="100%">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        padding: '1em',
                    }}>
                        <p style={{
                            fontSize: '1.7rem'
                        }}>{poema}</p>
                    </div>
                </foreignObject>
            </switch>

        </svg>
    )
}
