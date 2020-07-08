import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "../../App.css"

export default function Page() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
  <div>
     <div className="navbar">
      <div className="navbarContainer">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu  
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
   </div>
   <div className="covid">
     <span>COVID-19:</span>
     <span style={{color:"white"}}>Financial help & Sources </span>
   </div>
   <div className="slider">
     <span className='sliderTitle'>
      Shop and compare <br/> everything.Even loans.
     </span>
    
     <div className="sliderItems">
      <div className="items">jlja</div>
      <div className="items">asdf</div>
      <div className="items">dfsaf</div>
      <div className="items">asdf</div>
      <div className="items">ASDFJKLA</div>
      <div className="items">asdf</div>
    </div>
     <div className="sliderButton">
    <Button variant="contained" style={{ background:  'rgb(97, 224, 97)' ,color:"white"}} disableElevation>
  More Loans Options
</Button>
</div>
<div className="sliderFooterText">
  <span>Privacy Scured | Advertising Disclosure</span>

</div>
<hr className="sliderBorder" / >

     </div>


<div className="afterSlider">
  <h1>
    How LangingTree works
  </h1>
  
  <h3>
    Three steps to your best loan
  </h3>
</div>
  </div>
  );
}
