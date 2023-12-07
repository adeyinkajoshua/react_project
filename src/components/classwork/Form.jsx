import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div>
      {isSubmitted ? (
        <div>
          <h2>Submission Successful!</h2>
          <p>Thank you for submitting the form.</p>
        </div>
      ) : (
        <>
          {step === 1 && (
            <div style={{display: 'flex',flexDirection:"column",backgroundColor:"black",color :"white",alignItems: 'center',justifyContent: 'center',  height: '100vh',}}>
              <h2 style={{backgroundColor:"purple",color:"white"}}>
                 Personal Information</h2>
              <form style={{border: '1px solid #ccc',padding: '20px',borderRadius: '10px',width: '300px',textAlign: 'center'}}>
                <label>
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <button style={{ marginRight:'40px',marginTop:"25px", padding: '8px',cursor: 'pointer',}} type="button" onClick={nextStep}>
                  Next
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div style={{display: 'flex',flexDirection:"column",backgroundColor:"brown",color :"white",alignItems: 'center',justifyContent: 'center',  height: '100vh',}}>
              <h2>Contact Information</h2>
              <form style={{border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '300px',  textAlign: 'center'}}>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <button style={{ marginRight:'40px', padding: '8px',cursor: 'pointer',}} type="button" onClick={prevStep}>
                  Previous
                </button>
                <button style={{ marginLeft:'40px',marginTop:"20px", padding: '8px',cursor: 'pointer',}} type="button" onClick={nextStep}>
                  Next
                </button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div style={{display: 'flex',flexDirection:"column",backgroundColor:"green",color :"white",alignItems: 'center',justifyContent: 'center',  height: '100vh',}}>
              <h2> Security Information</h2>
              <form style={{border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '300px',  textAlign: 'center'}}>
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Confirm Password:
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <button style={{ marginLeft:'40px',marginTop:"20px", padding: '8px',cursor: 'pointer',}} type="button" onClick={prevStep}>
                  Previous
                </button>
                <button style={{ marginLeft:'40px',marginTop:"20px", padding: '8px',cursor: 'pointer',}} type="button" onClick={handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MultiStepForm;
