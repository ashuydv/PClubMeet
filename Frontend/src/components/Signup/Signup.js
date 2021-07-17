import React from 'react';
import { FormControl, InputLabel, FormHelperText } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button'
import Email from '@material-ui/icons/Email'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Signup.css'
import '../Login/Signin.css'
import '../Login/Signin'

const Signup = () => {
    return (
        <div className="signup-card">
            <FormControl className='form' autoComplete="off">
                <h1>Sign Up</h1>
                <Input
                    required
                    className='input'
                    placeholder='Full name'
                    label="Filled" variant="filled"
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start" className='icons'>
                            <PersonIcon />
                        </InputAdornment>
                    }
                />
                <Input
                    className='input'
                    placeholder='Username'
                    label="Filled" variant="filled"
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start" className='icons'>
                            <Email />
                        </InputAdornment>
                    }
                />
                <Input
                    className='input'
                    placeholder='Create Username'
                    label="Filled" variant="filled"
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start" className='icons'>
                            <AccountCircleIcon/>
                        </InputAdornment>
                    }
                />

                <Input
                    className='input'
                    placeholder='Create Password'
                    label="Filled" variant="filled"
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start" className='icons'>
                            <VpnKeyIcon />
                        </InputAdornment>
                    }
                />
                <Button variant="contained" className='btn'>Signup</Button>
                <p className='signup'>Already have an account, {" "}
                    <a
                        className='text-success'
                        href='Signin'>Signin</a>
                </p>
            </FormControl>
        </div>
    );
}

export default Signup;
