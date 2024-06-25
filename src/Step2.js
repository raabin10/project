import React from 'react';

const Step2 = ({ data, errors, onChange }) => {
    return (
        <div>
            <div className="form-group">
                <label>Address Line 1</label>
                <input type="text" className={`form-control ${errors.address1 ? 'is-invalid' : ''}`} name="address1" value={data.address1} onChange={onChange} />
                {errors.address1 && <div className="invalid-feedback">{errors.address1}</div>}
            </div>
            <div className="form-group">
                <label>Address Line 2</label>
                <input type="text" className="form-control" name="address2" value={data.address2} onChange={onChange} />
            </div>
            <div className="form-group">
                <label>City</label>
                <input type="text" className={`form-control ${errors.city ? 'is-invalid' : ''}`} name="city" value={data.city} onChange={onChange} />
                {errors.city && <div className="invalid-feedback">{errors.city}</div>}
            </div>
            <div className="form-group">
                <label>State</label>
                <input type="text" className={`form-control ${errors.state ? 'is-invalid' : ''}`} name="state" value={data.state} onChange={onChange} />
                {errors.state && <div className="invalid-feedback">{errors.state}</div>}
            </div>
            <div className="form-group">
                <label>Zip Code</label>
                <input type="text" className={`form-control ${errors.zip ? 'is-invalid' : ''}`} name="zip" value={data.zip} onChange={onChange} />
                {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
            </div>
        </div>
    );
};

export default Step2;
