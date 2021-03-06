import React from 'react';
import {getIngredients} from 'utils/beverage';
import {
    Container,
} from '@material-ui/core'
import ResultsSkeleton from 'components/Skeletons/ResultsSkeleton';
import BeverageCard from 'components/BeverageCard';

class ResultsSection extends React.Component {


    shouldComponentUpdate(nextProps) {
        return nextProps.isLoading !== this.props.isLoading ||
                nextProps.searchResults.length !== this.props.searchResults.length
    }

    render() {
        const { searchResults, isLoading} = this.props
        return (
            <Container
                maxWidth="xl"
                disableGutters
                className="results-section"
                component="section"
            >
                
                {/* <Typography variant="h4">
                    Alcohol Mixes
                </Typography> */}
                <Container
                    maxWidth="lg"
                    className="drinks-section"
                    component="section"
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
                                        ingredients={getIngredients(beverage)}
                                    />
                                ))
                            )
                    }
                </Container>
            </Container>
        )
    }
}


export default ResultsSection;