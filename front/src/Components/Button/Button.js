


export const Button = ({ Wrapper, title, onClick = () => {} }) => {
    return <Wrapper onClick={onClick}>
        {title}
    </Wrapper>
}