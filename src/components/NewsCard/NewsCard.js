import React from 'react';
import { 
    Card, 
    CardActions, 
    CardActionArea, 
    CardContent, 
    CardMedia, 
    Button, 
    Typography 
} from '@material-ui/core';
import useStyles from './styles.js';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {
  const classes = useStyles();
  
    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target='_blank'>
                <CardMedia className={classes.media} image={urlToImage || 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F02%2F15%2F09%2F33%2Fnews-636978_640.jpg&f=1&nofb=1'}/>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'>Learn More</Button>
                <Typography variant='h5' color='textSecondary'>{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;