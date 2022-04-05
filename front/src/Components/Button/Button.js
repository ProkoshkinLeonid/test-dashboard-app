


export const Button = ({ Wrapper, image = null, title, onClick = () => {} }) => {
    return <Wrapper onClick={onClick}>
        {title}
        {image && image}
    </Wrapper>
}