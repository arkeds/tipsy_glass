import React from 'react';
import {
    Paper,
    CardHeader,
    CardContent
} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

const ResultsSkeleton = () => {
    return (
        <React.Fragment>
            <Paper elevation={3}
                style={{
                    'margin': '5px',
                    'maxWidth': '400px'
                }}
            >
                <CardHeader
                    title={<Skeleton animation="wave" variant="rect" height={10} width="50%"style={{ 'marginBottom': 6 }} />}
                    subheader={<Skeleton animation="wave" variant="rect" height={10} width="30%"/>}
                    />
                <Skeleton animation="wave" variant="rect" height={100} />
                <CardContent>
                    <Skeleton animation="wave" height={10} style={{ 'marginBottom': 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />   
                </CardContent>
            </Paper>
            <Paper elevation={3}
                style={{
                    'margin': '5px',
                    'maxWidth': '400px'
                }}
            >
                <CardHeader
                    title={<Skeleton animation="wave" variant="rect" height={10} width="50%"style={{ 'marginBottom': 6 }} />}
                    subheader={<Skeleton animation="wave" variant="rect" height={10} width="30%"/>}
                    />
                <Skeleton animation="wave" variant="rect" height={100} />
                <CardContent>
                    <Skeleton animation="wave" height={10} style={{ 'marginBottom': 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />   
                </CardContent>
            </Paper>
            <Paper elevation={3}
                style={{
                    'margin': '5px',
                    'maxWidth': '400px'
                }}
            >
                <CardHeader
                    title={<Skeleton animation="wave" variant="rect" height={10} width="50%"style={{ 'marginBottom': 6 }} />}
                    subheader={<Skeleton animation="wave" variant="rect" height={10} width="30%"/>}
                    />
                <Skeleton animation="wave" variant="rect" height={100} />
                <CardContent>
                    <Skeleton animation="wave" height={10} style={{ 'marginBottom': 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />   
                </CardContent>
            </Paper>
            <Paper elevation={3}
                style={{
                    'margin': '5px',
                    'maxWidth': '400px'
                }}
            >
                <CardHeader
                    title={<Skeleton animation="wave" variant="rect" height={10} width="50%"style={{ 'marginBottom': 6 }} />}
                    subheader={<Skeleton animation="wave" variant="rect" height={10} width="30%"/>}
                    />
                <Skeleton animation="wave" variant="rect" height={100} />
                <CardContent>
                    <Skeleton animation="wave" height={10} style={{ 'marginBottom': 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />   
                </CardContent>
            </Paper>
        </React.Fragment>
    )
}

export default ResultsSkeleton;