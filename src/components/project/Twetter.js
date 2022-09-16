import React from 'react'
import Cube from "./Cube"
import { tweetImg } from "../data/tweet";

const Twetter = () => {
    return (
        <div className="bg">
            <article className='containt-cube'>
                <Cube data={tweetImg} />
            </article>
        </div>
    )
}

export default Twetter