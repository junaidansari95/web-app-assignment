import React from "react";
import '../App.css';
import { Box, OutlinedInput, InputAdornment, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ProductCard from "./ProductCard";
import products from "../Assets/products";
import Topbar from "./Topbar";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: products,
            searchString: '',
            locFilter: ''
        };
    }
    handleChange = event => {
        this.setState({ searchString: event.target.value.trim().toLowerCase() });
    }
    handleLoc = event => {
        this.setState({ locFilter: event.target.value })
    }
    render() {
        var { data, locFilter, searchString } = this.state;
        let text = data;
        if (searchString) {
            text = text.filter(info => info.name.toLowerCase().match(searchString));
        }
        return (
            <Box>
                <Topbar />
                <Box style={{ margin: 'auto', width: 500, display: 'flex', justifyContent: 'space-between', marginTop:180, marginBottom:100 }}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant="h4" gutterBottom align='center'>What</Typography>
                        <Typography variant="caption" display="block" color='textSecondary'>Product name</Typography>
                        <OutlinedInput
                            placeholder='Product name' onChange={this.handleChange}
                            endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>} />
                    </Box>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant="h4" gutterBottom align='center'>Where</Typography>
                        <Typography variant="caption" display="block" color='textSecondary'>Product location</Typography>
                        <OutlinedInput
                            placeholder='Location' onChange={this.handleLoc}
                            endAdornment={<InputAdornment position="end"><LocationOnIcon /></InputAdornment>} />
                    </Box>
                </Box>
                <Box className="grid-container">
                    <Box className="grid-row">
                    <Typography variant="h4" gutterBottom align='center'>Popular products</Typography>
                        <Box className="grid-row">
                            {
                                text.filter(index => locFilter ? index.location.toLowerCase().includes(locFilter) : true).map(index => {
                                    return <ProductCard className="grid-item" name={index.name} price={index.price} locat={index.location} image={index.image} key={index.image} />
                                })
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}