import React from 'react';
import PropTypes from 'prop-types';
import {
    CardActions,
    CardMedia,
    CardActionArea,
    CardHeader,
    Button,
    Paper,
    CardContent,
    Typography
} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

const ProductCard = ({
    id,
    image,
    name,
    instructions,
    category,
    ingredients
}) => {
    
    const [visibleInfo, setVisibleInfo] = React.useState('');
    const handleVisibility = (infoSection) => {
        if (visibleInfo === infoSection) {
            setVisibleInfo('')
        } else {
            setVisibleInfo(infoSection);
        }
    }
    const [skeleton, setSkeleton] = React.useState(true)

    return (
        <Paper
            key={id}
            elevation={3}
            className="beverage-card-wrapper"
        >
           
            <CardActionArea>
                <CardHeader
                    className="beverage-header"
                    title={name}
                    subheader={category}
                />
                { skeleton && <Skeleton animation="wave" variant="rect" height={150} />  }
                {
                    visibleInfo === '' && (
                        <CardMedia
                            component="img"
                            image={image}
                            title={name}
                            height="150"
                            style={{
                                display: skeleton ? 'none' : 'block'
                            }}
                            onLoad={() => setSkeleton(false)}
                        />
                    )
                }
            </CardActionArea>
                
            {
                visibleInfo === 'INGREDIENTS' && (
                    <CardContent className="beverage-content">
                        <Typography gutterBottom variant="h6" component="label">
                            Ingredients
                        </Typography>
                        <ul className="ingredients-list">
                            {
                                (ingredients || []).map(ingredient => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))
                            }
                        </ul>
                    </CardContent>
                )
            }
            {
                visibleInfo === 'INSTRUCTIONS' && ( 
                    <CardContent className="beverage-content">
                        <Typography gutterBottom variant="h6" component="h2">
                            Instructions
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {instructions}
                        </Typography>
                    </CardContent>
                )
            }
            <CardActions>
                <Button size="small" color="primary" onClick={() => handleVisibility('INGREDIENTS')}>
                    Ingredients
                </Button>
                <Button className="active" size="small" color="primary" onClick={() => handleVisibility('INSTRUCTIONS')}>
                    Instructions
                </Button>
            </CardActions>
        </Paper>
    )
}

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired
}

export default ProductCard;