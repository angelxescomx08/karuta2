import { FC } from "react"
import { useTheme } from '@mui/material/styles';

interface Props {
    poema: string;
}

export const KarutaSVG: FC<Props> = ({ poema }) => {
    const theme = useTheme();
    console.log(theme);
    return (
        <svg width="100%" height={400}
            xmlns="http://www.w3.org/2000/svg"
            style={{
                backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#f1f1f1',
                color: theme.palette.text.primary,
                transition: 'background-color .3s ease, color .3s ease'
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
