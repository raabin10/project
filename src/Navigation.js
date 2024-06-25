import React from 'react';

const Navigation = ({ step, handleNext, handlePrev, handleSubmit }) => {
    return (
        <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-secondary" onClick={handlePrev} disabled={step === 1}>Back</button>
            {step < 3 ? (
                <button className="btn btn-primary" onClick={handleNext}>Next</button>
            ) : (
                <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
            )}
        </div>
    );
};

export default Navigation;
