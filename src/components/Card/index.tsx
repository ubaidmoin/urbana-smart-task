import React, { MouseEventHandler } from 'react';
import { StarRatings } from '..';
import { formatDate } from '../../services/Settings';

interface CardProps {
    title: string;
    backdrop: string;
    rating: number;
    releaseDate: Date;
    onClick: MouseEventHandler;
}

// Custom Card
export default function Card({ title, backdrop, rating, releaseDate, onClick }: CardProps) {
    return (
        <div className='card' onClick={onClick}>
            <img src={backdrop} className="card-image" alt={title} />
            <div className='card-details'>
                <div className='row-no-space'>
                    <div className='card-label'>{`Release Date: `}</div>
                    <div className='card-description'>{`${formatDate(releaseDate)}`}</div>
                </div>
                <div className='row'>
                    <div className='card-title'>{title}</div>
                    <div className='card-rating'>{`★ ${rating.toFixed(2)} / 10`}</div>
                </div>
                <div className='row'>
                    <div />
                    <StarRatings rating={rating} />
                </div>
            </div>
        </div>
    )
}