import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Link from "react-router-dom/Link";

//MUI stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex",
    marginBottom: 20,
  },
  image: {
      minWidth:200,
  },
  content: {
      padding: 25,
      objectFit: 'cover'
  }
};

class Scream extends Component {
  render() {
    const { classes } = this.props;
    const {
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount,
      },
    } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia className={classes.image} image={userImage} title="Profile image" />
          <CardContent>
            <Typography
                class={classes.contnet}
              variant="h5"
              component={Link}
              to={`/users/${userHandle}`}
              color="primary"
            >
              {userHandle}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {createdAt}
            </Typography>
            <Typography variant="body1">{body} </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Scream);
