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
            maxWidth="xl"
            className="hero-section"
            component="section"
        >
            <Container
                disableGutters
                maxWidth="md"
                component="section"
                className="title-section"

            >
                <Typography variant="h3">
                    Tipsy Glass
                </Typography>
                <Typography variant="body2">
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