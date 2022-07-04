import { FC } from "react"

interface Props{
    poema: string;
}

export const KarutaSVG: FC<Props> = ({poema}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg">
            {poema.split(' ').map((palabra,i)=>
                <text key={i} x="0" y={(35*(i+1))} className="small">{palabra}</text>)}
            
        </svg>
    )
}
