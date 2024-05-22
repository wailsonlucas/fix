import SocialIcons from './SocialIcons'
import { Container } from './Container.styled'
import { Flex } from './Flex.styled'
import { StyledFooter } from './Footer.styled'
import { useState } from 'react'

export default function Footer() {
  const [isTextFieldVisible, setTextFieldVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [buttonText, setButtonText] = useState('Show Text Field');
  const onButtonClick = () => {
    if (isTextFieldVisible) {
       
      setTextFieldVisible(false);
      setButtonText('Show Text Field');
    } else {
      setTextFieldVisible(true);
      setButtonText('Cancel');
    }
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };


    const hi = {
        fontSize: '1em',
        marginRight: '15px',
      };
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='' />

        <Flex>
        <div>
      <input type="button" name="answer" value={buttonText} onClick={onButtonClick} />
      {isTextFieldVisible && (
        <input
          type="text"
          id="textInput"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Enter text..."
        />
      )}
    </div>

    

          <SocialIcons />
        </Flex>

        <p  style={hi}>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}




 
  

