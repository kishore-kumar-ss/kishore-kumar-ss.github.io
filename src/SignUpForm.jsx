import React, { useState } from 'react';

export default function SignUpForm ({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    registrationNo: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="registrationNo">Registration Number</label>
          <input type="text" id="registrationNo" name="registrationNo" value={formData.registrationNo} onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
