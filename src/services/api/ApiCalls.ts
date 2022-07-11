import { gql } from '@apollo/client';

export const GET_TRENDING_MOVIES = gql`
query($first: Int, $after: String, $size: BackdropSize){
  movies {
    trending (first: $first, after: $after) {
      pageInfo {
        endCursor
      },
      edges {
        node {
          id,
          title,
          rating,
          releaseDate,
          backdrop(size: $size)
        }
      }
    }
  }
}
`;

export const GET_MOVIE_BY_ID = gql`
query($id: String, $size: BackdropSize){
  movies {
    movie(id: $id) {
      id,
      title,
      backdrop (size: $size),
      isAdult,
      isVideo,
      numberOfRatings,
      originalTitle,
      originalLanguage,
      overview,
      rating,
      releaseDate,
      revenue,
      status,
      tagline,
      alternativeTitles {
        title,
        type
      },
      budget,
      genres {
        name
      },
      homepage,
      images {
        backdrops {
					image (size: $size)
        }
      },
      keywords {
        name
      },
      runtime
		}
  }
}
`;
