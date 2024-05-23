import React from 'react'
import { Link } from 'react-router-dom';
import { StyledHeader , Nav ,Image  } from './Header.styled'
import { Container } from './Container.styled'
import { Button } from './Button.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const iconStyle = {
        fontSize: '2.7em', // Adjust the font size as needed
        marginRight: '8px', // Add some space between the icon and text
        '@media (max-width: 780px)': `
    flex-direction: column;
    margin-bottom: 40px;
    display: 'block';
  `,
    };
      const hud = {
        fontSize: '2.8em', // Adjust the font size as needed
        marginRight: '8px', // Add some space between the icon and text
        fontWeight: 'bold',

    };

  
  return (
    <>
    <div>
        
      <StyledHeader bg="#c4eef5" style={{width:"1600px", height:"130px"}} >
      <Container>
      <Nav>
        <div>
        <FontAwesomeIcon i className="fa-brands fa-figma"  style={iconStyle}/>
         <span style={hud}>G.PFE</span>
        </div>
        <Button style={{marginRight:'250px'}} >       <Link to="/Main" style={{ textDecoration: 'none' , color:'black' , fontSize:'2.5' }}>Get Binom To Work With You</Link>    </Button>  

      </Nav>

    
    </Container>

      </StyledHeader>
     
    </div>
    </>
  )
}

export default Header


