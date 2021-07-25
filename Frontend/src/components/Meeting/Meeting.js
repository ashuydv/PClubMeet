import React, { useEffect, useRef, useState } from 'react';
import './Meeting.css'
import socket from 'socket.io-client';

// const peer = new Peer('', {
//     host : 'localhost',
//     port : '5000',
//     path : '/peerjs'
// });

const Meeting = () => {

    const [Peer, setPeer] = useState();
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

        const fn = async () => {
            const PeerJs = (await import('peer')).default;
            setPeer(Peer)
          }
        
        fn()

        navigator.mediaDevices.getUserMedia({ video : true, audio : true }).then( stream => {
            addVideoStream(myVideo, stream);
        } )

    } , [])
    
    return (

        <div className = "meeting-main">
                <div id = "video-grid"  ref = {videoGrid} ></div>
        </div> 
         
    );
}

export default Meeting;
