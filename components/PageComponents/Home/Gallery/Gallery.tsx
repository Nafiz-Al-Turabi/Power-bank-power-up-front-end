import React from 'react';
import image from '@/public/images/Gallery/gallery.jpg';
import image2 from '@/public/images/Gallery/gallery2.jpg';
import image3 from '@/public/images/Gallery/gallery3.jpg';
import image4 from '@/public/images/Gallery/gallery4.jpg';
import image5 from '@/public/images/Gallery/gallery5.jpg';
import Image from 'next/image';

const images = [image, image2, image3, image4, image5];

const Gallery = () => {
    return (
        <div className='bg-[#fff] py-15'>
            <div className='max-w-[1152px] mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-3'>
                    {images.map((image, index) => (
                        <div key={index} className={index <= 1 ? 'md:col-span-6' : 'md:col-span-4'}>
                            <Image 
                                src={image} 
                                alt='Gallery' 
                                width={500} 
                                height={500}
                                className='w-full h-full object-cover rounded-[20px]'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;