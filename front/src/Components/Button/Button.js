import {ButtonCreateNew} from "./Button.styled";


export const Button = ({ title, onClick = () => {}, isDisabled, Wrapper = null, image = null }) => {
    if (Wrapper) return <Wrapper>
        <div>{title}</div>
        {image && <img src={image}/>}
    </Wrapper>
    return <ButtonCreateNew disabled={isDisabled} isDisabled={isDisabled} onClick={onClick}>
        <img style={{marginLeft: 20}} src={image}/>
        {title}
    </ButtonCreateNew>
}
