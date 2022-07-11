import React, { MouseEventHandler } from 'react';
import { CircularProgress, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_MOVIE_BY_ID } from '../../services/api/ApiCalls';
import { formatDate } from '../../services/Settings';
import { Genre, Movies } from '../../services/Interfaces';

interface DialogProps {
    open?: string;
    handleClose: MouseEventHandler;
}

export default function CustomDialog({ open, handleClose }: DialogProps) {
    const { data } = useQuery(GET_MOVIE_BY_ID, {
        variables: { id: open, size: 'W780' },
    });


    if (data) {
        const { movies: { movie } } = data as Movies;
        return (
            <div>
                <Dialog
                    open={!!open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <img src={movie.backdrop} className="card-image-dialog" alt={movie.title} />
                    <div className='row-no-space' style={{ padding: '0px 24px', paddingTop: 16 }}>
                        <div className='card-label'>{`Release Date: `}</div>
                        <div className='card-description'>{`${formatDate(movie.releaseDate)}`}</div>
                    </div>
                    <div className='row'>
                        <div className='dialog-title-container'>
                            <div className="dialog-title">{`${movie.title}`}</div>
                            <div className='dialog-status-label'>{`(${movie.status})`}</div>
                        </div>
                        <div className='dialog-rating'>
                            <div className='card-rating'>{`★ ${movie.rating.toFixed(2)} / 10`}</div>
                            <div className='dialog-rating-label'>{`(${movie.numberOfRatings})`}</div>
                        </div>
                    </div>
                    <DialogContent style={{ paddingTop: 0 }}>
                        <div className='row-no-space'>
                            {movie.genres.map((genre: Genre, index: number) => (
                                <div key={index} className='genre'>{genre.name}</div>
                            ))}
                        </div>
                        <div className='row-no-space' style={{ marginTop: 10 }}>
                            <div className='dialog-label'>{`Budget: `}</div>
                            <div className='dialog-description'>{`$${movie.budget}`}</div>
                        </div>
                        <div className='row-no-space'>
                            <div className='dialog-label'>{`Revenue: `}</div>
                            <div className='dialog-description'>{`$${movie.revenue}`}</div>
                        </div>
                        <DialogContentText style={{ marginTop: 10 }}>
                            {movie.overview}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
    return <CircularProgress />;
}
