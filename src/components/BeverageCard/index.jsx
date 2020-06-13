import React from 'react';
import PropTypes from 'prop-types';
import {
    CardActions,
    CardMedia,
    CardActionArea,
    CardHeader,
    Button,
    Paper
} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

const ProductCard = ({
    id,
    image,
    name,
    instructions,
    category
}) => {
    
    const [skeleton, setSkeleton] = React.useState(true)

    return (
        <Paper
            key={id}
            style={{
                'margin': '5px',
                'maxWidth': '400px'
            }}
           elevation={3}
        >
            <CardActionArea>
                <CardHeader
                    title={name}
                    subheader={category}
                />
                { skeleton && <Skeleton animation="wave" variant="rect" height={150} />  }
                
                <CardMedia
                    component="img"
                    image={image}
                    title={name}
                    height="150"
                    onLoad={() => setSkeleton(false)}
                />
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
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