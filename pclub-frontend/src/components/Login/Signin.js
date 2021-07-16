import React from 'react';
import { FormControl, InputLabel, FormHelperText } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button'
import Signup from '../Signup/Signup';
import './Signin.css'

const Signin = () => {
    return (
        <div>
            <div className="main-body">
                    <div className="desc">
                        <h2>Introducing a free and secure video calling service accessible for all.</h2>
                        <p>For more information, visit {" "}
                            <a
                                className='text-success'
                                href={" https://www.pclubmeet.com/ "}>PClub</a>
                        </p>
                    </div>
                    <div className="card">
                        <h1>Sign In</h1>
                        <FormControl className='form'>
                            <Input
                                className='input'
                                placeholder='Username'
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
                                placeholder='Password'
                                label="Filled" variant="filled"
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start" className='icons'>
                                        <VpnKeyIcon />
                                    </InputAdornment>
                                }
                            />
                            <Button variant="contained" className='btn'>Login</Button>
                            <p className='signup'>Don't have an account, {" "}
                                <a
                                className='text-success'
                                href='Signup'>Signup</a>
                            </p>
                        </FormControl>
                    </div>
            </div>
        </div>
    );
}

export default Signin;
