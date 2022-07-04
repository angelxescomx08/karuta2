import { FC } from "react"
import { KarutaSVG } from "./KarutaSVG"

interface Props{
  poema: string;
}

export const KarutaCarta:FC<Props> = ({poema}) => {
  return (
    <article>
      <KarutaSVG poema={poema}/>
    </article>
  )
}