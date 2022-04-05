import { Button } from "../Button/Button"
import { ButtonCreateNew } from "../Button/Button.styled"
import { FilterButtonContainer, FilterWrapper, RightbarContainer } from "./Rightbar.styled"

export const Rightbar = () => {
    return <RightbarContainer>
        <Button Wrapper={ButtonCreateNew} title='Create New'/>
        <Button Wrapper={FilterWrapper} title='Even rows of data'/> 
        <Button Wrapper={FilterWrapper} title='Odd rows of data'/>
        <Button Wrapper={FilterWrapper} title='All data'/>
    </RightbarContainer>
}