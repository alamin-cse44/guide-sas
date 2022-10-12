import React from 'react';
import chair from '../../assets/images/place1.jpg';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointBanner = ({date,setDate}) => {
    return (
        <div className='my-16 justify-center items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
            <div>
                <DayPicker
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                />
            </div>
            <div>
                <img className='rounded-md' src={chair} alt="" />
            </div>
        </div>
    );
};

export default AppointBanner;