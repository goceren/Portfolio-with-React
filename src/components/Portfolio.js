import React, { Component } from 'react';
import RepoList from './Repo/RepoList';
import axios from 'axios';

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            repos: [],
            loading: true
        };
    }

    componentDidMount() {
        this.performSearch();
    }

    performSearch = (query = 'goceren') => {
        axios.get(`https://api.github.com/users/${query}/repos`)
            .then(response => {
                this.setState({
                    query: query,
                    repos: response.data,
                    loading: false
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
       
        return (
            <section id="portfolio">
                <div className="container">
                    <h4>
                        My Projects
			        </h4>
                    
                    <hr className="star-light"/><br /><br />

                    <div id="portfolio-images" className="clearfix">

                        {
                            (this.state.loading)
                                ? <p>Loading...</p>
                                : <div><RepoList data={this.state.repos} /></div>
                        }

                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;