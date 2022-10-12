import React, { useState } from 'react';
import AppointBanner from './AppointBanner';
import AvailableAppoinments from './AvailableAppoinments';

const Appointment = () => {
    
    const [date, setDate] = useState(new Date());
    return (
        <div className=''>
            <AppointBanner date={date} setDate={setDate}></AppointBanner>
            <AvailableAppoinments date={date}></AvailableAppoinments>
        </div>
    );
};

export default Appointment;