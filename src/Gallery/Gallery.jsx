import React, { useEffect, useState } from 'react';
import GalleryCard from './GalleryCard';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        
        fetch('https://toy-store-server-delta.vercel.app/gallery')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setGallery(data)
            })
    }, [])
    return (
        <div className='my-5'>
            <h2 className='text-center text-2xl font-extrabold mb-3 mt-1 text-pink-200'>Toys Gallery</h2>


            <div className='grid md:grid-cols-5 grid-cols-2'>
                {
                    gallery.map(item => {
                        return <GalleryCard key={item._id} item={item}></GalleryCard>
                    })
                }
            </div>
        </div>
    );
};

export default Gallery;