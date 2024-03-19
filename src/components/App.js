import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios'


class App extends React.Component {
    state = {
        movies: [],

        searchQuery: ""

    }

    async componentDidMount() {
        const response = await axios.get(`https://api.themoviedb.org/3/list/8294363?api_key=${process.env.REACT_APP_API_KEY}&language=tr-TR&page=1`)
        console.log(response.data.items)
        this.setState({movies : response.data.items})
    }

    deleteMovie = async (movie) => {
        
        const baseURL = `https://api.themoviedb.org/3/list/8294363/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`
        console.log(baseURL)
        axios.post(baseURL)

        const newMovieList = this.state.movies.filter(m =>m.id!==movie.id);
        this.setState(state =>({
            movies:newMovieList
        }))

    }
 

    searchMovie = (event) => {
        this.setState({searchQuery:event.target.value})

    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.original_name? movie.original_name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1 : movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
            )

        return(
            <div className="container">
                <div className='row'>
                    <div className='col-lg-12'>
                        <SearchBar
                        searchMovieProp = {this.searchMovie} />
                    </div>
                </div>
                <MovieList
                    movies={filteredMovies}
                    deleteMovieProp ={this.deleteMovie}
                />
            </div>
        )

    }
    
}

export default App;