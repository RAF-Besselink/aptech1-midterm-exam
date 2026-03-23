import React, { useState , Component } from 'react';


const Signup = () => {
    
    const [FormData, setFormData] = useState({
        firstName: '',
            surname: '',
            username: '',
            password: '',
            email: '',
    });
    
    const [errors, setErrors] = useState({});
    
     

    handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData,[name]: value});
    }

    const validate = () => {
        let tempErrors = {};
        const nameRegex = /^[A-Za-z]{2,}$/;
        const userRegex = /^[A-Za-z0-9._-]+$/;
        const passRegex = /^(?=.*[a-z]) (?=.*[A-Z]) (?=.*\d) (?=.*[\W]) . {8,16}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!nameRegex.test(formData.firstName))
        tempErrors.firstName = "Letters only, min 2 characters";
        if(!nameRegex.test(formData.surname))
        tempErrors.surname = "Letters only, min 2 characters";
        if(!userRegex.test(formData.username))
            tempErrors.username = "Letters, numbers, (.), (_), (-) only";
        if(!passRegex.test(formData.password))
            tempErrors.password = "8-16 characters (Uppercase, Lowercase, Number, Special character";
        if(!emailRegex.test(formData.email))
            tempErrors.email ="Must be a valid email format";

        setErrors(tempErrors);
        return
        Object.keys(tempErrors).length === 0;
    }

   handleSubmit = (e) => {
    e.preventDefault();
    if(validate()) {
        alert("Form submitted successfully");
        console.log("Final Data:", formData)
    }
   };

   
    return (
        <div style={{maxWidth:'400px',margin:'20px auto',fontFamily:'Arial'}}>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input name="firstName" value={formData.firstName} onChange={handleChange} type="text"/>
                    {errors.firstName && <p style={{color:'red'}}>{errors.firstName}</p>}
                </div>
                <div>
                    <label>Surname:</label>
                    <input name="surname" value={formData.surname} onChange={this.handleChange} type="text"/>
                    {errors.surname && <p style={{color:'red'}}>{errors.surname}</p>}
                </div>
                <div>
                    <label>Username:</label>
                    <br />
                    <input name="username" value={formData.username} onChange={(e)} type = "text" />
                    {errors.username && <p style = {{color: 'red'}}>{errors.username}</p>}
                </div>
                <div>
                <label>Password:</label>
                <input name="password" onChange={this.handleChange} type = "password" />
                {errors.password && <p style = {{color: 'red'}}>{errors.password}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input name="email" onChange={this.handleChange} type = "text" />
                    {errors.email && <p style = {{color: 'red'}}>{errors.email}</p>}
                </div>

                <button type="submit" style ={{margintop:'10 px'}}>Sign up</button>
            </form>
        </div>
    )
   }


export default Signup