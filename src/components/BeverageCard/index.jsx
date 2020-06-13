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
    ListItem,
    List,
    ListItemText,
    Divider,
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
            <CardContent
                style={{
                    
                    display: visibleInfo === 'INGREDIENTS' ? 'block' : 'none'
                }}
            >
                <List disablePadding>
                    <ListItem selected>
                        <ListItemText primary={'Ingredients'} />
                    </ListItem>
                    <Divider/>
                    {
                        (ingredients || []).map((item, index) => (
                            <React.Fragment>
                                <ListItem key={index} style={{padding: '0px !important'}}>
                                    <ListItemText primary={item} />
                                </ListItem>
                                <Divider/>
                            </React.Fragment>
                        ))
                    }
                </List>
            </CardContent>
            <CardContent
                style={{
                    minHeight: '150px',
                    display: visibleInfo === 'INSTRUCTIONS' ? 'block' : 'none'
                }}
            >
                <Typography gutterBottom variant="h6" component="h2">
                    Instrunctions
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {instructions}
                </Typography>
            </CardContent>
            <CardActions>
                {
                    ingredients.length > 0 && (
                        <Button size="small" color="primary" onClick={() => handleVisibility('INGREDIENTS')}>
                            Ingredients
                        </Button>
                    )
                }
                {
                    instructions && (
                        <Button className="active" size="small" color="primary" onClick={() => handleVisibility('INSTRUCTIONS')}>
                            Instructions
                        </Button>
                    )
                }
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