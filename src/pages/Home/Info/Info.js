import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const icons = [
    {id:1,title:"Opening Ours",bgClass:"bg-gradient-to-r from-cyan-500 to-blue-500",img:clock},
    {id:2,title:"Our Locations",bgClass:"bg-neutral",img:marker},
    {id:3,title:"Contact Us",bgClass:"bg-accent",img:phone},
]

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                icons.map(item => <InfoCard
                    key={item.id}
                    item={item}
                ></InfoCard>)
            }
        </div>
    );
};

export default Info;