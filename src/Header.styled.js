import styled from "styled-components";
export const StyledHeader=styled.header`
width:100%;
background-color:${(props)=>props.bg};
padding:25px
`

export const Nav=styled.nav`

display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 40px;

@media(max-width: 780px){
    flex-direction: column;
}

`

export const Logo=styled.img`
@media(max-width: 700px){
    flex-direction: column;}
`
export const Image=styled.img`
width:375px;
margin-left:30px;

@media(max-width: 700px){
margin:40px 0 30px;

}
`