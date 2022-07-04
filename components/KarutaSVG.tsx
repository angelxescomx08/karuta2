import { FC } from "react"

interface Props {
    poema: string;
}

export const KarutaSVG: FC<Props> = ({ poema }) => {
    return (
        <svg width={400} height={400}
            xmlns="http://www.w3.org/2000/svg"
            style={{
                backgroundColor: '#000',
                color: '#fff'
            }}>
            <switch>
                <foreignObject x="0" y="0" width="400" height="400">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        padding: '10px',
                    }}>
                        <p style={{
                            fontSize: '32px'
                        }}>{poema}</p>
                    </div>
                </foreignObject>
            </switch>

        </svg>
    )
}
