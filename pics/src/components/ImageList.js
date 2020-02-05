import './ImageList.css';
import ImageCard from './ImageCard'
import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(image => {
        // only add key to the root element here
        return <ImageCard key={image.id} image={image} />
    });

    return (
        <div className="image-list">{images}</div>
    );
}

export default ImageList;