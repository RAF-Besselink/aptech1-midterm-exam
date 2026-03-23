import React, { Component } from 'react';


class Signup extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            surname: '',
            username: '',
            password: '',
            email: '',
            errors: {}
        };
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value})
    }


   handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", this.state);
   }

   render() {
    const { errors } = this.state;

    return (
        <div style={{maxWidth:'400px',margin:'20px auto',fontFamily:'Arial'}}>
            <h2>Create Account</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input name="firstName" onChange={this.handleChange} type="text"/>
                    {errors.firstName && <p style={{color:'red'}}>{errors.firstName}</p>}
                </div>
                <div>
                    <label>Surname:</label>
                    <input name="surname" onChange={this.handleChange} type="text"/>
                    {errors.surname && <p style={{color:'red'}}>{errors.surname}</p>}
                </div>
                <div>
                    <label>Username:</label>
                    <input name="username" onChange={(e)} type = "text" />
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
}

export default Signup