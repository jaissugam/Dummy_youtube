import React from 'react';

const VideoDetail=(props)=>{
    if(!props.video){
        return(
            <div>
                Loading...
            </div>
        );
    }
    const videoSrc=`https://www.youtube.com/embed/${props.video.id.videoId}`;
    return(
        <div className="ui segment">
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc}></iframe>
            </div>
            <h4 className="ui header">{props.video.snippet.title}</h4>
            <p>{props.video.snippet.description}</p>
        </div>
    );
}
export default VideoDetail;