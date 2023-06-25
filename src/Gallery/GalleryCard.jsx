import React from 'react';

const GalleryCard = ({ item }) => {
    const {
        image
    } = item;
    // console.log(image);
    return (
        <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
                <img
                    alt="gallery"
                    className="block animate-bounce h-full w-full rounded-lg object-cover object-center"
                    src={image} />
            </div>
        </div>
    );
};

export default GalleryCard;