import { useEffect, useState } from 'react';
import { useImages } from './useImages';
import { useLength } from './useLength';

export const useImageCategory = (imageCategory, difficulty) => {
    const [images, setImages] = useState([]);
    const length = useLength(difficulty)
    const [imageCategoriesArray, isLoaded] = useImages()
    const { natureImages, foodImages, footballImages } = imageCategoriesArray;

    const filter = (images) => {
        const slicedImages = images.slice(0, length)
        return [...slicedImages, ...slicedImages].sort(() => Math.random() - 0.5)
    }

    useEffect(() => {
        console.log("useEffect", imageCategoriesArray);
        
        switch (imageCategory) {
            case "nature":
                setImages(filter(natureImages));
                b.splice
            case "football":
                setImages(filter(footballImages));
                break;
            case "food":
                setImages(filter(foodImages));
                break;
            case "any":
                const anyImages = [
                    ...natureImages,
                    ...foodImages,
                    ...footballImages
                ]
                setImages(filter(anyImages))
                break;
        }
    }, [isLoaded, imageCategory, difficulty])

  return images
}
