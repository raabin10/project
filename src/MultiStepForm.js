import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Navigation from './Navigation';
import { loadData, saveData } from './localStorageHelpers';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const savedData = loadData();
        if (savedData) {
            setFormData(savedData);
        }
    }, []);

    useEffect(() => {
        saveData(formData);
    }, [formData]);

    const handleNextStep = () => {
        if (validateStep(step)) {
            setStep(step + 1);
        }
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const validateStep = (step) => {
        let currentErrors = {};
        // Add validation logic based on step
        if (step === 1) {
            if (!formData.name) currentErrors.name = 'Name is required';
            if (!formData.email) currentErrors.email = 'Email is required';
            if (!/\S+@\S+\.\S+/.test(formData.email)) currentErrors.email = 'Email is invalid';
            if (!formData.phone) currentErrors.phone = 'Phone is required';
        }
        if (step === 2) {
            if (!formData.address1) currentErrors.address1 = 'Address Line 1 is required';
            if (!formData.city) currentErrors.city = 'City is required';
            if (!formData.state) currentErrors.state = 'State is required';
            if (!formData.zip) currentErrors.zip = 'Zip Code is required';
        }
        setErrors(currentErrors);
        return Object.keys(currentErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        if (validateStep(3)) {
            console.log('Form submitted', formData);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h2> Form</h2>
                </div>
                <div className="card-body">
                    {step === 1 && <Step1 data={formData} errors={errors} onChange={handleChange} />}
                    {step === 2 && <Step2 data={formData} errors={errors} onChange={handleChange} />}
                    {step === 3 && <Step3 data={formData} />}
                    <Navigation step={step} handleNext={handleNextStep} handlePrev={handlePrevStep} handleSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
