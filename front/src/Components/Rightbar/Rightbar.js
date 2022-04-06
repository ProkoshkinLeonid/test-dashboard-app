import { Button } from "../Button/Button"
import { ButtonCreateNew } from "../Button/Button.styled"
import { FilterButtonContainer, FilterWrapper, RightbarContainer } from "./Rightbar.styled"

export const Rightbar = ({createNewItem}) => {
    return <RightbarContainer>
        <Button onClick={createNewItem} Wrapper={ButtonCreateNew} title='Create New'/>
        <FilterWrapper>
            <button>
            Even rows of data
            </button>
            <button>
            Odd rows of data
            </button>
            <button>
            All data
            </button>
        </FilterWrapper>
    </RightbarContainer>
}