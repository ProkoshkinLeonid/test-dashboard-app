import { Button } from "../Button/Button"
import { ButtonCreateNew } from "../Button/Button.styled"
import { RightbarContainer } from "./Rightbar.styled"

export const Rightbar = () => {
    return <RightbarContainer>
        <Button Wrapper={ButtonCreateNew} title='Create New'/>
        <div>Create New</div>
        <div>Create New</div>
        <div>Create New</div>
    </RightbarContainer>
}