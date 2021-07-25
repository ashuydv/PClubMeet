import React, { useEffect, useState, useRef } from 'react';
import Card from '@material-ui/core/Card'
import './Preview.css'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import { BiMicrophone } from 'react-icons/bi'
import { IoVideocamOutline } from 'react-icons/io5'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import { IoCopySharp } from 'react-icons/io5'
import Button from '@material-ui/core/Button'
import styled from "styled-components";
import Axios from 'axios';

//experimental
import { useHistory } from 'react-router-dom';

const Video = styled.video`
  border: 2px solid #37AF4B;
  width: 100%;
  height: 100%;
`;


const Preview = () => {
    //states & ref's
    const userVideo = useRef()
    const [stream, setStream] = useState();

    const history = useHistory();

    //initial mounting
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            setStream(stream);
            if (userVideo.current) {
                userVideo.current.srcObject = stream;
            }
        })
    }, []);

    
    let UserVideo;
    if (stream) {
        UserVideo = (
            <Video playsInline muted ref={userVideo} autoPlay />
        );
    }

    //handle button join
    const handleJoin = () => {
        Axios.get('http://localhost:5000/join').then( (response) => {
            history.push({
                pathname : '/meeting',
                state : {
                    roomId : response.data.link,
                }
            })
        } )
    } 

    return (
        <div>
            <div className="preview-main">
                <h1 className='heading'>Room #1</h1>
                <Card className='card'>
                    <CardContent className='video'>
                        {UserVideo}
                    </CardContent>
                    <CardActions className='card-buttons'>
                        <IconButton size="medium" className='preview-icon'>
                            <BiMicrophone />
                        </IconButton>
                        <IconButton size="medium" className='preview-icon'>
                            <IoVideocamOutline />
                        </IconButton>
                    </CardActions>
                </Card>
                <Input type="text" variant="filled" className='username' placeholder='Add Username' />
                <div className='join'>
                    <Input
                        className='input'
                        value='Some text to copy'
                        label="Filled" variant="filled"
                        id="input-with-icon-adornment text"
                        endAdornment={
                            <InputAdornment position="end" >
                                <IconButton>
                                    <IoCopySharp />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <Button onClick = {handleJoin} className='btn'>Join Meet</Button>
                </div>
            </div>
        </div>
    );
}

export default Preview;