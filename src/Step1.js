import React from 'react';

const Step1 = ({ data, errors, onChange }) => {
    return (
        <div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} name="name" value={data.name} onChange={onChange} />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} name="email" value={data.email} onChange={onChange} />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="tel" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} name="phone" value={data.phone} onChange={onChange} />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
        </div>
    );
};

export default Step1;
