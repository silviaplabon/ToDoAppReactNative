import React from "react"
import styled, { css } from "@emotion/native"
import { navigate } from '../Route/RootNavigation/RootNavigation';


const CustomButtonNavigate = props => (
    <ButtonContainer
        onPress={() => navigate(`${props.task}`)}
        style={css`
        border-width: 1px;
    `}
        backgroundColor={props.backgroundColor}
    >
        <ButtonText textColor={props.textColor}>{props.title}</ButtonText>
    </ButtonContainer>
)

export default CustomButtonNavigate;

const ButtonContainer = styled.TouchableOpacity`
    margin: 15px;
    width: 100px;
    height: 40px
    padding: 12px;
    border-radius: 10px;    
    background-color: ${props => props.backgroundColor};
`

const ButtonText = styled.Text`
	font-size: 15px;
	color: ${props => props.textColor};
	text-align: center;
    font-weight:600;
`