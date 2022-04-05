import React from 'react'
import { Button } from '../Button/Button'
import { DefaultButtonWrapper, GrayButtonWrapper } from '../Button/Button.styled'
import { HeaderButtonsContainer, HeaderContainer } from './Header.styled'



export const Header= () => {
    return <HeaderContainer>
        <img src='logo.svg'/>
        <HeaderButtonsContainer>
            <Button Wrapper={GrayButtonWrapper} title='Help' image={<img src="help_circle.svg"/>}/>
            <Button Wrapper={DefaultButtonWrapper} title='UPGRADE'/>
        </HeaderButtonsContainer>
    </HeaderContainer>
    
}
