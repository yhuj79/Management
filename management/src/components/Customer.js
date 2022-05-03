import React from 'react';

function Customer({id, image, name, birthday, gender, job}) {
    return (
        <div>
            <CustomerProfile image={image} name={name} id={id} />
            <CustomerInfo birthday={birthday} gender={gender} job={job} />
        </div>
    );
}

function CustomerProfile({image, name, id}) {
    return (
        <div>
            <img src={image} alt="profile" />
            <h2>{name}({id})</h2>
        </div>
    );
}

function CustomerInfo({birthday, gender, job}) {
    return (
        <div>
            <p>{birthday}</p>
            <p>{gender}</p>
            <p>{job}</p>
        </div>
    );
}

export default Customer;