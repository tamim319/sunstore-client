import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hook/useAuth';
import Myorder from '../Myorder/Myorder';

const Myorders = () => {
    const [bookings, setbookings] = useState([]);
    const {user} = useAuth()
    useEffect( () => {
        fetch(`https://stark-gorge-54734.herokuapp.com/bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setbookings(data))
    } , [user.email])
    return (
        <div>
            <h2>this is my orders {bookings.length}</h2>

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Myorder key={booking._id} booking={booking} setbookings={setbookings} bookings={bookings}></Myorder>)
                }
            </Grid>
        </div>
    );
};

export default Myorders;