import styled from 'styled-components'

export const NavbarContainer = styled.div`
    display: flex;
    height: 56px;
    justify-content: center;
    padding-right: 400px;
`

export const NavbarItem = styled.div`
    border-top: ${props => (props.isSelected ? `1px solid #C6CACC;` : `none`)};
    border-right: ${props => (props.isSelected ? `1px solid #C6CACC;` : `none`)};
    border-left: ${props => (props.isSelected ? `1px solid #C6CACC;` : `none`)};
    min-width: 97px;
    max-height: 56px;
    line-height: 30px;
    border-radius: 4px 4px 0px 0px;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
`