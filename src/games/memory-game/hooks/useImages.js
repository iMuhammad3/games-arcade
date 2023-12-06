import { listAll, ref } from "firebase/storage";
import { storage } from "../../../config/firebase.config";
import { useEffect, useState } from "react";

const url = path => {
    return `https://firebasestorage.googleapis.com/v0/b/mask-games.appspot.com/o/${path}?alt=media&token=2c7545f0-7d05-4f81-ad7f-a57cd5275644`;
};

export const useImages = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageCategoriesArray, setImageCategoriesArray] = useState({
        natureImages: [],
        foodImages: [],
        footballImages: [],
    });
    const basePath = "/images/memory-images/";

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const natureRef = ref(storage, basePath + "nature");
                const footballRef = ref(storage, basePath + "football");
                const foodRef = ref(storage, basePath + "food");
                const refs = [natureRef, footballRef, foodRef];

                const newImages = {
                    natureImages: [],
                    foodImages: [],
                    footballImages: [],
                };

                await Promise.all(
                    refs.map(async (ref, index) => {
                        const list = await listAll(ref);
                        list.items.forEach(item => {
                            const path = item.fullPath.replaceAll("/", "%2F");
                            const name = item.name;
                            const imageObj = {
                                name,
                                url: url(path),
                            };
                            newImages[Object.keys(newImages)[index]].push(
                                imageObj
                            );
                        });
                    })
                );
                setImageCategoriesArray(newImages);
            } catch (error) {
                console.error("Error fetching image URLs: ", error);
            } finally {
                setIsLoaded(true);
            }
        };
        fetchImages();
    }, []);
console.log(imageCategoriesArray);
    return [imageCategoriesArray, isLoaded];
};
