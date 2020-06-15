import React, {Component} from 'react';
import {Container} from '@material-ui/core'

import CocktailService from 'services/CocktailService';

import HeroSection from 'components/HeroSection';
import ResultsSection from 'components/ResultsSection';

class Home extends Component {

    state = {
        defaultDrink: 'margarita',
        enterKey: 13,
        searchQuery: '',
        drinks: [],
        searchResults: [],
        loading: false,
        keyword: '',
    }

    onSearchChange = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }


    componentDidMount() {
        this.getInitialDrinks();
    }

    render() {
        const {
            searchQuery,
            loading,
            searchResults,
            drinks
        } = this.state;
        return (
            <Container
                disableGutters
                maxWidth="xl"
                component="main"
                className="main-content"
            >
                <HeroSection
                    searchQuery={searchQuery}
                    onSearchChange={this.onSearchChange}
                    handleSearch={this.handleSearch}
                />
                <ResultsSection 
                    isLoading={loading} 
                    searchResults={(searchResults || []).length > 0 ? (searchResults || []) : drinks}
                />
            </Container>
        );
    }

    getInitialDrinks = async() => {
        this.setState({
            loading: true,
        });
        const drinks = await CocktailService.search(this.state.defaultDrink);
        this.setState({
            drinks: drinks,
            loading: false,
        })
    }

    handleSearch = async(e) => {
        const query = this.state.searchQuery;
        if ( e.keyCode === this.state.enterKey && 
                this.state.searchQuery !== ''
        ) {
            this.setState({
                loading: true,
                searchQuery: '',
                keyword: query,
            });
            const drinks = await CocktailService.search(query);
            this.setState({
                searchResults: drinks,
                loading: false,
                searchQuery: ''
            })
        }
    }
}

export default Home;