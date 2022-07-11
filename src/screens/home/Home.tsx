import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
} from '@mui/material';
import { getMovies } from '../../services/api/ApiManager';
import { Card, CustomDialog } from '../../components'
import './Home.css';
import { TrendingMovies, Edge } from '../../services/Interfaces';

function HomeScreen() {
  const scrollView = useRef<HTMLInputElement | null>(null);
  const [movies, setMovies] = useState<TrendingMovies>();

  const handleGetMovies = async (endCursor = '') => {
    const res = await getMovies(endCursor);
    if (res && res?.data) {
      if (movies && movies?.movies && movies?.movies?.trending && movies?.movies?.trending?.edges?.length > 0) {
        const _data = {
          ...movies,
          movies: {
            trending: {
              pageInfo: res.data.movies.trending.pageInfo,
              edges: [...movies?.movies.trending.edges, ...res.data.movies.trending.edges]
            }
          }
        }
        setMovies(_data);
      } else {
        setMovies(res?.data);
      }
    }
  }
  useEffect(() => {
    handleGetMovies()
  }, [])

  const [open, setOpen] = useState('')

  const handleClickOpen = (id: string) => {
    setOpen(id)
  };

  const handleClose = () => {
    setOpen('')
  };

  const onScroll = () => {
    if (scrollView?.current) {
      const {clientWidth, scrollWidth, scrollLeft} = scrollView?.current;
      if (clientWidth + scrollLeft >= scrollWidth - (window.innerWidth / 2)) {
        handleGetMovies(movies?.movies.trending.pageInfo.endCursor);
      }

    }
  };


  if (movies) {
    const { movies: { trending: { edges } } } = movies as TrendingMovies;
    return (
      <div className="home">
        <Box className="home-container">
          <div ref={scrollView} className='home-scrollView' onScroll={onScroll}>
            {edges && edges.length > 0 && edges.map((movie: Edge, index: number) => {
              const { node: { id, title, rating, releaseDate, backdrop } } = movie;
              return (
                <Card
                  key={index + 1}
                  title={title}
                  rating={rating}
                  releaseDate={releaseDate}
                  backdrop={backdrop}
                  onClick={() => handleClickOpen(id)}
                />
              )
            })}
          </div>
        </Box>
        {!!open && (
          <CustomDialog
            open={open}
            handleClose={handleClose}
          />
        )}
      </div>
    );
  } else {
    return null;
  }
}

export default HomeScreen;
