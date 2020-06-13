import React from 'react';
import {
    Container,
    Typography,
    
} from '@material-ui/core'
import ResultsSkeleton from 'components/Skeletons/ResultsSkeleton';
import BeverageCard from 'components/BeverageCard';

const ResultsSection = ({
    searchResults,
    isLoading,
    keyword
}) => {
   


    return (
        <Container
            disableGutters
            className="results-section"
            component="section"
        >
            
            <Typography variant="h4">
                Alcohol Mixes
            </Typography>
            <Container
                className="drinks-section"
                component="section"
                maxWidth="xl"
            >
                {   isLoading 
                        ? (<ResultsSkeleton/>) 
                        : (
                            (searchResults || []).map(beverage => (
                                <BeverageCard
                                    key={beverage.idDrink}
                                    id={beverage.idDrink}
                                    image={beverage.strDrinkThumb}
                                    name={beverage.strDrink}
                                    category={beverage.strCategory}
                                    instructions={beverage.strInstructions}
                                />
                            ))
                        )
                }
            </Container>
        </Container>
    )
}

export default ResultsSection;