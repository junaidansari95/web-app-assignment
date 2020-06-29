import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromCart } from "../Actions/cartAction";
import { history } from '../Assets/history'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton, Box, Typography, Button } from '@material-ui/core';
class Cart extends React.Component {
    render() {
        const { cart } = this.props.cart;
        let totalPrice = 0;
        cart.forEach(cartItem => {
            totalPrice += cartItem.price
        })
        return (
            <Box style={{ display: 'flex', flexDirection: 'column', maxWidth: 800, margin:'auto', marginTop:24, marginBottom: 48 }}>
                <Box>
                    <IconButton onClick={() => history.push('/')} >
                        <ArrowBackIcon />
                        <Typography variant="h4" gutterBottom align='center'>Back to Shopping Point</Typography>
                    </IconButton>
                </Box>
                <Box>
                    {
                        cart.map((cartItem) => <Box key={cartItem.image} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 13, background: '#c9e2f187' }} >
                            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 10 }}>
                                <Typography variant="h6" gutterBottom style={{ marginLeft: 100 }}>{cartItem.name}</Typography>
                                <img src={cartItem.image} style={{ height: 250, width: 'auto' }} alt='productImage' />
                            </Box>
                            <Typography variant="h4" gutterBottom style={{ marginTop: 24, marginRight: 10 }}>₹ {cartItem.price}</Typography>
                        </Box>)
                    }
                </Box>
                <Typography variant="h4" gutterBottom style={{ display: 'flex', justifyContent: 'flex-end' }}>Total: ₹ {totalPrice}</Typography>
                <Button
                    variant="outlined"
                    size="small"
                    color="primary">
                    Checkout
                </Button>
            </Box>
        )
    }
}
const mapStateToProps = state => {
    const { cart } = state
    return ({ cart })
};
export default connect(mapStateToProps, { removeFromCart })(withRouter(Cart));