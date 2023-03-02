import styled from "styled-components";

const WelcomeText = styled.h2`
font-size: 170px;
color: ${ ({ theme }) =>  theme.color.primary };
`
const CssInJs = () => {
    return(
        <>
            <h4>Styled Component</h4>
            <WelcomeText>HELLO WORLD 🖐</WelcomeText>
        </>
    )
}

export default CssInJs;