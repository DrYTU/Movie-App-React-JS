import React from 'react';


const MovieList = (props) => {

        return (
            <div className='row'>



                {props.movies.map((movie) => {
                    return (
                        <div className='col-12 col-md-6 col-xl-4' key={movie.id}>
                            <div className='card mb-4 shadow-sm'>
                                <img height="621" style={{objectFit : "cover"}} src={"https://media.themoviedb.org/t/p/w220_and_h330_face/"+movie.poster_path} className='card-img-top' alt="sampleMovie" />
                                <div className='card-body'>
                                    <h5 className='card-title'>{movie.title? movie.title:movie.original_name}</h5>
                                    <p className='card-text'>{movie.overview}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <button type='button' onClick={() => props.deleteMovieProp(movie)} className='btn btn-md btn-outline-danger'>Delete</button>
                                        <h2><span className='badge bg-info'>{movie.vote_average.toFixed(1)}</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>)


                })}






            </div>
        )

}

export default MovieList;