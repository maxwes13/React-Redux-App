import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/action";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginTop: '25px',
    },
  },
  text: {
    width: '100%',
    maxWidth: 500,
    margin: 'auto',
    marginTop: '25px',
  },
}));


const Joke = (props) => {

    const classes = useStyles();



    useEffect(() => {
        props.fetchData();
    }, [props.fetchData]);

    if (props.is_loading_data) {
        return <p>Loading...</p>
    }
    return (
        <div className={classes.root}>
        <Typography variant="h5" gutterBottom>{props.quote}</Typography>
            <Button variant="contained" color="secondary" onClick={props.fetchData}>New Quote</Button>

        </div>
    )

}

const mapStateToProps = (state) => {
    return { quote: state.quote, is_loading_data: state.is_loading_data }
}

export default connect(mapStateToProps, { fetchData })(Joke);