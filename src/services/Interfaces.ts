interface Node {
    id: string;
    rating: number;
    backdrop: string;
    releaseDate: Date;
    title: string;
  }
  
  export interface Edge {
    node: Node;
  }
  
  interface PageInfo {
    endCursor: string;
  }
  
  interface Trending {
    edges: Array<Edge>;
    pageInfo: PageInfo;
  }
  
  interface TrendingMovie {
    trending: Trending;
  }

  interface AlternativeTitles {
    title: string;
  }

  interface Backdrop {
    image: string;
  }

  interface Image {
    backdrops: Array<Backdrop>;
  }

  interface Keyword {
    name: string;
  }

  export interface Genre {
    name: string;
  }

  interface Movie {
    alternativeTitles: Array<AlternativeTitles>;
    backdrop: string;
    budget: number;
    genres: Array<Genre>;
    homepage: string;
    id: string;
    images: Image;
    isAdult: boolean;
    isVideo: boolean;
    keywords: Array<Keyword>;
    numberOfRatings: number;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    rating: number;
    releaseDate: Date;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
  }
  
  export interface TrendingMovies {
    movies: TrendingMovie;
  }

  export interface GetMovies {
    data: TrendingMovies;
    loading: boolean;
    networkStatus: number;
  }

  interface MoviesItem {
    movie: Movie;
  }

  export interface Movies {
    movies: MoviesItem;
  }

