import React from 'react';
import {
    Container,
    TextField,
    Typography
} from '@material-ui/core'

const HeroSection = ({
    searchQuery,
    onSearchChange,
    handleSearch
}) => {

    return (
        <Container
            disableGutters
            className="hero-section"
            component="section"
        >
            <Container
                maxWidth="md"
                component="section"
                className="title-section"

            >
                <Typography variant="h3">
                    Tipsy Glass
                </Typography>
                <Typography variant="h6">
                    Learn how to make popular alchol mixes.
                </Typography>
            </Container>

            <Container
                maxWidth="md"
                component="section"
                className="search-section"
            >
                
                <TextField 
                    fullWidth
                    variant="outlined"
                    placeholder="Search for a drink. ie Vodka"
                    className="search-field"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e)}
                    onKeyDown={(e) => handleSearch(e)}
                />
  
                
            </Container>
        </Container>
    )
}

export default HeroSection;