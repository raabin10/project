import React from 'react';

const Step3 = ({ data }) => {
    return (
        <div>
            <h3>Confirmation</h3>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Address Line 1:</strong> {data.address1}</p>
            <p><strong>Address Line 2:</strong> {data.address2}</p>
            <p><strong>City:</strong> {data.city}</p>
            <p><strong>State:</strong> {data.state}</p>
            <p><strong>Zip Code:</strong> {data.zip}</p>
        </div>
    );
};

export default Step3;
