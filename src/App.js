import React from 'react';

const LoginForm = () => {

    const inputStyle = {
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '8px',
        width: '250px'
    };
    
    const formStyle = {
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '300px',
        margin: '0 auto',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        textAlign: 'center'    
    };

    const buttonStyle = {
        padding: '10px', 
        width: '90%',
        color: '#fff',
        backgroundColor: 'blue',
        borderRadius: '8px',
        textAlign: 'center',
        cursor: 'pointer'
    };

    return (
        <div style={formStyle}>
            <h2>Login</h2>
            <div class>
            <input type="text" placeholder="Email" id="email" style={inputStyle}/>
            </div> 
            <div>
            <input type="password" name="password" placeholder='Password' id="password" style={inputStyle}/>
            </div>
            <div>            
            <a href='#' style={{display: 'block', marginBottom: '10px', textAlign: 'center'}}>Forgot Password?</a>
            </div>
            <div>
            <button type="submit" name="submit" style={buttonStyle}>Login</button>
            </div>
            <div>
                <p>Don't have an account?<a href='#' style={{marginLeft: "1px"}}>Sign up</a></p>
            </div>                
            
        </div>
    );
};
export default LoginForm;



