import React from 'react';

const InfoCard = ({ data }) => {
    return (
        <article className="info-article">
            <h2>{data.title}</h2>
            <ul className="info-ul grid-row">
                {data.items.map((item,a) => <li key={a} className="info-item">{item}</li>)}
            </ul>
        </article>
    )
}

export default InfoCard;