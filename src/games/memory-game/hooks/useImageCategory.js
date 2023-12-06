import { useEffect, useState } from 'react';
import { useImages } from './useImages';
import { useLength } from './useLength';

export const useImageCategory = (imageCategory, difficulty) => {
    const [images, setImages] = useState([]);
    // let images = []
    const length = useLength(difficulty)
    const [imageCategoriesArray, isLoaded] = useImages()
    const { natureImages, foodImages, footballImages } = imageCategoriesArray;

    const filter = (images) => {
        const slicedImages = images.slice(0, length)
        slicedImages.push(...slicedImages)
        return slicedImages.sort(() => Math.random() - 0.5)
    }

    useEffect(() => {
        console.log("useEffect", imageCategoriesArray);
        
        switch (imageCategory) {
            case "nature":
                setImages(filter(natureImages));
                // images = natureImages
                b.splice
            case "football":
                setImages(filter(footballImages));
                // images = footballImages
                break;
            case "food":
                setImages(filter(foodImages));
                // images = foodImages
                break;
            case "any":
                const anyImages = [
                    ...natureImages,
                    ...foodImages,
                    ...footballImages
                ]
                setImages(filter(anyImages))
                //     images = [
                //         ...natureImages,
                //         ...foodImages,
                //         ...footballImages
                //     ].sort(() => Math.random() - 0.5).slice(0, 4);
                break;
        }
    }, [isLoaded, imageCategory, difficulty])
    console.log(images);

  return images
}
