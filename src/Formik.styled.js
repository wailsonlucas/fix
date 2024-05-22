import styled from 'styled-components';

export const StyledFormik = styled.div`
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #fff;
    margin: 0 !important;
  }
  .app {
    padding-top: 100px; /* Adjust this value according to the height of your existing header */
}
  .form-block-wrapper {
    position: relative;
    width: 100%;
    max-width: 600px; /* Adjust the maximum width as needed */
    margin: 0 auto;
    padding: 20px;
}

  .form-block-wrapper--is-login {
    opacity: 0.92;
    background-color: #2c497f;
  }
  .form-block-wrapper--is-signup {
    opacity: 0.94;
    background-color: #433b7c;
  }
  .form-block {
    position: relative;
    margin: 100px auto 0;
    width: 285px;
    padding: 25px;
    background: rgba(255, 255, 255, 0.13);
    border-radius: 2px;
    color: #fff;
    box-shadow: 0px 0px 16px 9px rgba(0, 0, 0, 0.07);
  }
  .form-block__header {
    margin-bottom: 20px;
  }
  .form-block__header h1 {
    font-size: 30px;
    margin: 0 0 20px;
  }
  .form-block__toggle-block span {
    font-size: 13px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.65);
  }
  .form-block__input-wrapper {
    height: 126px;
    position: relative;
    margin-bottom: 2px;
    transition: all 0.25s cubic-bezier(0.36, 1, 0.62, 0.98) 0.3s;
  }
  .form-block--is-signup .form-block__input-wrapper {
    height: 252px;
    transition: all 0.5s cubic-bezier(0.36, 1, 0.62, 0.98) 0.2s;
  }
  .form-group--signup {
    position: absolute;
    top: 0;
    left: 150%;
    width: 100%;
  }
  .form-group__input {
    display: block;
    font-size: 15px;
    color: #fff;
    width: 100%;
    box-sizing: border-box;
    padding: 14px 10px;
    margin-bottom: 15px;
    background: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1px;
  }
  .form-group__input:focus {
    outline: none;
    border: 1px solid #fff;
    background: transparent;
  }
  .form-block--is-signup .form-group__input {
    transform: translateX(-150%);
  }
  .form-group--login .form-group__input {
    opacity: 1;
  }
  .form-block--is-signup .form-group--login .form-group__input {
    opacity: 0;
  }
  .form-group--signup .form-group__input {
    opacity: 0;
  }
  .form-block--is-signup .form-group--signup .form-group__input {
    opacity: 1;
  }
  .form-group__input:nth-of-type(1),
  .form-group__input:nth-of-type(2),
  .form-group__input:nth-of-type(3),
  .form-group__input:nth-of-type(4) {
    transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98), opacity 0.3s ease-in-out, background 0.15s ease-in-out, border 0.3s ease-in-out;
  }
  .button {
    display: inline-block;
    padding: 15px 12px;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: none;
    border-radius: 2px;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 13px 8px rgba(0, 0, 0, 0.1);
  }
  .button--primary {
    background: #ed6a5e;
    color: #fff;
  }
  .button:hover {
    box-shadow: 0px 0px 18px 15px rgba(0, 0, 0,0);
  }
  `
