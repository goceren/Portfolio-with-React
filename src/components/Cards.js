import React from 'react';
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        backgroundColor: "#172a45",
        height: "200px"
    },
    title:{
        color: '#fff',
        textAlign: 'left',
        fontSize: '20px'
    },
    subheader:{
        color: '#fff',
        textAlign: 'left',
        fontSize: '13px'
    },
    body:{
        color: '#fff',
        textAlign: 'left',
        fontSize: '16px'
    }

}));


export default function Cards(props) {

    const classes = useStyles();


    return (
        <div className="col">
            <div className="portfolio-item">
                <Card className={classes.card}>
                    <CardHeader classes={{
                         title: classes.title,
                         subheader: classes.subheader
                    }}
                    action={
                        <a className="icons" target="_blank" href={props.url} rel="noopener noreferrer"> <FontAwesomeIcon className="social-icons" size="3x" icon={faGithub} /></a>
                    }
                        title={props.name} 
                        subheader={dayjs(props.date).format("DD MMM YYYY")}
                    />
                    
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.body}>
                            {props.description}
                        </Typography>
                    </CardContent>
                   
                </Card>
            </div></div>

    )
}