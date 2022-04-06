import styled from 'styled-components'

export const DefaultButtonWrapper = styled.button`
    height: 40px;
    width: 96px;
    left: 0px;
    top: 0px;
    border-radius: 10px;
    background: #FFFFFF;
    color: #367BF5;
    font-weight: 500;
    font-size: 14px;
    box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.16), 0px 2px 4px rgba(54, 123, 245, 0.24);
    border-radius: 10px;
    border: none;
`

export const GrayButtonWrapper = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    width: 96px;
    left: 0px;
    top: 0px;
    border-radius: 10px;
    background-color: #F7F9FA;
    border: none;
    margin-right: 15px;
`

export const ButtonCreateNew = styled.button`
    align-items: center;
    display: flex;
    cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};
    color: #367BF5;
    font-size: 20px;
    font-weight: 500;
    height: 56px;
    width: 213px;
    border-radius: 99px;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 16px 24px rgba(54, 123, 245, 0.16), 0px 6px 12px rgba(54, 123, 245, 0.16);
`

export const RightbarMenuButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 190px;
  height: 56px;
  background-color: ${props => props.isActive ? '#E5EFFF' : ''};
  cursor: pointer;
  margin-top: 10px;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.44px;
  color: rgba(0, 0, 0, 0.87);
`
export const RightbarMenuButtonTitle = styled.div`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.44px;
`

export const RightMenuButtonDescription = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  letter-spacing: 0.4px;
`

