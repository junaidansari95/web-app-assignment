import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../Actions/cartAction";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  CardActions,
  CardHeader,
  CardMedia,
  Card,
  Typography
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: 345,
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
})
class ProductCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  handleAddtoCart = () => {
    this.props.addToCart({
      name: this.props.name,
      price: this.props.price,
      image: this.props.image
    })
  }

  render(){
    const {classes} = this.props;
    let location = "Location: "+this.props.locat
    return (
      <Card className={classes.root}>
        <CardHeader title={this.props.name} subheader={location}/>
        <CardMedia
          className={classes.media}
          image={this.props.image}
        />
        <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" gutterBottom align="center">
            ₹ {this.props.price}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={this.handleAddtoCart}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    )
  }
}
const mapStateToProps = state => {
  const { cart } = state
  return ({ cart })
};
export default connect( mapStateToProps,{ addToCart })(withRouter(withStyles(styles)(ProductCard)));