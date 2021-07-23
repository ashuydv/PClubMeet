import React from 'react';

//experimental
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Meeting = () => {
    const location = useLocation();

    

    function addVideoStream(video, stream, videoGrid) {
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
            video.play()
        })
        videoGrid.append(video)
    }

    useEffect( () => {

        //video Grid
        const videoGrid = document.getElementById('video-grid')

        //Myvideo
        const myVideo = document.createElement('video')
        myVideo.muted = true

        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            addVideoStream(myVideo,stream,videoGrid)
        })
        console.log( location.state.roomId )
    },[location] )


    return (
        <div id="video-grid"></div>
    );
}

export default Meeting;
