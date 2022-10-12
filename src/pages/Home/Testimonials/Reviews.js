import React from 'react';

const Reviews = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            <div className='mt-5 flex justify-cnter'>
            <div className="avatar flex-1">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={review.img} alt="" />
                </div>
                    </div>
                    <div className='flex-1'>
                        <h4 className="font-bold text-xl">{review.name}</h4>
                        <p>{ review.location }</p>
                    </div>
            </div>
        </div>
</div>
    );
};

export default Reviews;