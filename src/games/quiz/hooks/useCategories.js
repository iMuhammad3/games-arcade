import { useEffect, useState } from "react";

export const useCategories = (api) => {
    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        try {
            const result = await fetch(api);
            const data = await result.json();
            
            setCategories(data.trivia_categories)
    
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [])
    return categories
};