import React, { useEffect, useRef, useState } from 'react';
import './Meeting.css'
import Peer from 'peerjs';
import socket from 'socket.io-client';
import { useLocation } from 'react-router';

// const peer = new Peer('', {
//     host : 'localhost',
//     port : '5000',
//     path : '/myapp'
// });

const Meeting = () => {

    const location = useLocation();

    const videoGrid = useRef();

    const myVideo = document.createElement('video')
    myVideo.muted = true

    function addVideoStream(video, stream){
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
            video.play()
        })
        videoGrid.current.append(video)
    }

    useEffect( () => {

        navigator.mediaDevices.getUserMedia({ video : true, audio : true }).then( stream => {
            addVideoStream(myVideo, stream);
        } )

        console.log(location.state.roomId)

    } , [])
    
    return (

        <div className = "meeting-main">
                <div id = "video-grid"  ref = {videoGrid} ></div>
        </div> 
         
    );
}

export default Meeting;
