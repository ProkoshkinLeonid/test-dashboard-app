import { Button } from "../Button/Button"
import { ButtonCreateNew } from "../Button/Button.styled"
import { FilterButtonContainer, FilterWrapper, RightbarContainer } from "./Rightbar.styled"

export const Rightbar = () => {
    return <RightbarContainer>
        <Button Wrapper={ButtonCreateNew} title='Create New'/>
        <FilterButtonContainer>
            <FilterWrapper>Even rows of data</FilterWrapper>
            <FilterWrapper>Odd rows of data</FilterWrapper>
            <FilterWrapper>All data</FilterWrapper>
        </FilterButtonContainer>
    </RightbarContainer>
}