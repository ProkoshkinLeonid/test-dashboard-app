import { Button } from "../Button/Button"
import {
    RightbarMenuButton,
    RightbarMenuButtonTitle,
    RightMenuButtonDescription
} from "../Button/Button.styled"
import { FilterWrapper, RightbarContainer } from "./Rightbar.styled"
import {ACTIVE_FILTER} from "../../helpers/constants";
import circle from '../../images/plus-circle.svg'
import print from '../../images/print.svg'
import vector from '../../images/check-outline.svg'
import donat from '../../images/chart-donut.svg'

export const Rightbar = ({createNewItem, isButtonCreateDisabled, setActiveFilter, activeFilter}) => {
    return <RightbarContainer>
        <Button
            image={circle}
            isDisabled={isButtonCreateDisabled}
            onClick={createNewItem}
            title='Create New'/>
        <FilterWrapper>
            <RightbarMenuButton
                isActive={activeFilter === ACTIVE_FILTER.EVEN_ROWS_OF_DATA}
                onClick = {() => {setActiveFilter(ACTIVE_FILTER.EVEN_ROWS_OF_DATA)}}>
                <img src={donat}/>
                <div>
                    <RightbarMenuButtonTitle>
                        Even rows of data
                    </RightbarMenuButtonTitle>
                    <RightMenuButtonDescription>
                        Display rows 2,4,6 etc
                    </RightMenuButtonDescription>
                </div>
            </RightbarMenuButton>
            <RightbarMenuButton
                isActive={activeFilter === ACTIVE_FILTER.ODD_ROWS_OF_DATA}
                onClick = {() => {setActiveFilter(ACTIVE_FILTER.ODD_ROWS_OF_DATA)}}>
                <img src={vector}/>
                <div>
                    <RightbarMenuButtonTitle>
                        Odd rows of data
                    </RightbarMenuButtonTitle>
                    <RightMenuButtonDescription>
                        Display rows 1,3,5 etc
                    </RightMenuButtonDescription>
                </div>
            </RightbarMenuButton>
            <RightbarMenuButton
                isActive={activeFilter===ACTIVE_FILTER.ALL_DATA}
                onClick = {() => {setActiveFilter(ACTIVE_FILTER.ALL_DATA)}}>
                <img src={print}/>
                <div>
                    <RightbarMenuButtonTitle>
                        All data
                    </RightbarMenuButtonTitle>
                    <RightMenuButtonDescription>
                        Display all data
                    </RightMenuButtonDescription>
                </div>
            </RightbarMenuButton>
        </FilterWrapper>
    </RightbarContainer>
}
