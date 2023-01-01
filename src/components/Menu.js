import React, {useState} from "react";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {BiFoodTag} from "react-icons/bi"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {BsPlusLg} from "react-icons/bs"
import {HiOutlineMinus} from "react-icons/hi"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import foodimg from "../assets/images/foodimg.jpg"
import { display } from "@mui/system";

function Menu() {
    const [counter, setCounter] = useState(0)
  
  const handleClick1 = () => {
    setCounter(counter + 1)
  }
  
  const handleClick2 = () => {
    if(counter > 0){
    setCounter(counter - 1)
    }}
    const [age, setAge] = React.useState('');

    const handleChange = (e) => {
      setAge(e.target.value);
    };
    return(
        <>
        {/* <div style={{backgroundColor: "#B2B2B2", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80px"}}>
            <h2 className="logo"># HASHTAG</h2>
        </div> */}
        <Container style={{padding: "1rem"}}>
            <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-large">Pick</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={30}>Both</MenuItem>
                <MenuItem value={10}><BiFoodTag color="#54B435" style={{marginRight: "10px"}} />Veg</MenuItem>
                <MenuItem value={20}><BiFoodTag color="#DC0000" style={{marginRight: "10px"}} />Non-Veg</MenuItem>
                
                
            </Select>
            </FormControl>
            </div>
            <div className="blog-container">
            <MDBCard className="blog-card">
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage style={{borderTopLeftRadius: "6px", borderTopRightRadius: "6px"}} src={foodimg} fluid alt='...'  />
                <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody >
                <MDBCardTitle className='MonteserratBold  blog-card-title' >Meals</MDBCardTitle>
                <MDBCardTitle className='MonteserratBold  blog-card-title' >₹100</MDBCardTitle>
             
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{backgroundColor: "#D6E4E5", padding: "5px 30px", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}><HiOutlineMinus style={{cursor: "pointer", marginRight: "10px"}} onClick={handleClick2}/>{counter}<BsPlusLg style={{cursor: "pointer", marginLeft: "10px"}} onClick={handleClick1}/></div>
                </div>
            </MDBCardBody>
            </MDBCard>
            
            </div>

        </Container>
        </>
    )
}

export default Menu;