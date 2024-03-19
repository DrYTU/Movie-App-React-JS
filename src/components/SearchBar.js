import React from 'react';


class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();        /*Enter'a basınca submit etmesini engelledik*/
    }

    render(){

        return(
            <form onSubmit={this.handleFormSubmit}> 
                <div className='form-row mt-5 mb-3'>
                    <div className='col-12'>
                        <input 

                        onChange={this.props.searchMovieProp} 

                        type='text' className='form-control' placeholder='Search a Movie' />
                    </div>
                </div>
            </form>
        )

    }
}

export default SearchBar;