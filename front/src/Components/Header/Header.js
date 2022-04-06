import React from 'react'
import { Button } from '../Button/Button'
import { DefaultButtonWrapper, GrayButtonWrapper } from '../Button/Button.styled'
import { HeaderButtonsContainer, HeaderContainer } from './Header.styled'
import helpCircle from '../../images/help-circle.svg'



export const Header= () => {
    return <HeaderContainer>
        <img src='logo.svg'/>
        <HeaderButtonsContainer>
            <Button Wrapper={GrayButtonWrapper} title='Help' image={helpCircle}/>
            <Button Wrapper={DefaultButtonWrapper} title='UPGRADE'/>
        </HeaderButtonsContainer>
    </HeaderContainer>

}
