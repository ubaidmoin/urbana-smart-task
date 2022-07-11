import React from 'react';
import { Rating } from 'react-simple-star-rating'

interface StarRatingProps {
    rating: number
}

// Custom StarRatings
export default function CustomStarRating({ rating }: StarRatingProps) {
    return (
        <Rating
            ratingValue={0}
            initialValue={rating}
            fillColor="#dbb900"
            iconsCount={10}
            size={15}
            readonly
        />
    )
}