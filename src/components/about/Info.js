import React from 'react'
import aboutData from '../../data/about';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className="info-box grid-row">
            <div className='center infos grid-col'>
                {aboutData.map((info, i) => <InfoCard key={i} data={info} />)}
            </div>
        </div>
    )
}

export default Info