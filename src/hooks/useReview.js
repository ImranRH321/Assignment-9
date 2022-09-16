
import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [review, setReivew] = useState([])
    useEffect(() => {
        fetch('Reviews.json')
        .then(res => res.json())
        .then(data => setReivew(data))
    },[])
    return [review, setReivew]
};


export default useReview;