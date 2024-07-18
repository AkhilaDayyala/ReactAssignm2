import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <h5 style={{color:'blue'}}>Registration Form by using FC</h5>
   
    <form onSubmit={handleSubmit}>
    
    <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput"  value={formData.name}
          onChange={handleChange}> Name</label>
</div>
<div class="form-floating">
  <input type="email" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword"   value={formData.email}
          onChange={handleChange}>EMail</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword" value={formData.password}
          onChange={handleChange}>Password</label>
</div>
<br></br>
<button type="submit" class="btn btn-success" style={{width:'400px'}}>Register</button>
</form>

    </>
  );
};

export default RegistrationForm;
