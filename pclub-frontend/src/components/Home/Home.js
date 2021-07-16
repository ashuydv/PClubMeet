import React, { useState } from 'react';
import './Home.css'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import {RiAddBoxLine} from 'react-icons/ri'

const Home = () => {
    return (
        <div>
            <div className="home">
                <h4>Welcome, Ashutosh Yadav</h4>
                <TextField
                    placeholder='Enter meeting code'
                    id="outlined-start-adornment"
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton className='input-btn'>
                                    <AiOutlineArrowRight className='input-icons' />
                                </IconButton>
                            </InputAdornment>,
                    }}
                    variant="outlined"
                />
                <div className='lines'>
                    <div className='line-1'></div>
                    <p>or</p>
                    <div className='line-1'></div>
                </div>
                <Button fullWidth={true} className='btn-meet'>
                    <InputAdornment>
                            <RiAddBoxLine className='btn-icon'  />
                    </InputAdornment>
                    New Meet
                </Button>
            </div>
        </div>
    );
}

export default Home;
