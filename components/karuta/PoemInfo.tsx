import { FC } from "react";

import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';

import { Carta } from "../../utils"

interface Props {
    carta: Carta;
}

export const PoemInfo: FC<Props> = ({ carta }) => {

    const theme = useTheme();
    const { japanese, id, english, silaba, spanish, author, authorJapanese, name } = carta;

    return (
        <article style={{maxHeight: '100%'}}>
            <Typography
                gutterBottom
                variant="h3"
                component="div"
                style={{ color: theme.palette.text.primary }}>
                #{id} - {name} / {silaba}
            </Typography>

            <Typography
                variant="body1"
                gutterBottom
                style={{ color: theme.palette.text.secondary }}>
                Author: {authorJapanese} / {author}
            </Typography>

            <Typography
                variant="body1"
                gutterBottom
                style={{ color: theme.palette.text.secondary }}>
                {japanese}
            </Typography>

            <Typography
                variant="body1"
                gutterBottom
                style={{ color: theme.palette.text.secondary }}>
                {english}
            </Typography>

            <Typography
                variant="body1"
                gutterBottom
                style={{ color: theme.palette.text.secondary }}>
                {spanish}
            </Typography>
        </article>
    )
}
