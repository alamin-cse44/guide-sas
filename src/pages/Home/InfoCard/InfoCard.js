import React from 'react';

const InfoCard = ({item}) => {
    return (
        <div>
            <div className={`card lg:card-side text-white shadow-xl px-3 p-1 ${item.bgClass}`}>
                <figure>
                    <img width={60} src={item.img} alt="Album"/>

                    </figure>
            <div className="card-body">
                    <h2 className="card-title">{ item.title }</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
            </div>
        </div>
    );
};

export default InfoCard;