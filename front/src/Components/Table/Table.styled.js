import styled from 'styled-components'


export const TableContainer = styled.div`
    flex-grow: 1;
    overflow: auto;
    padding-right: 120px
`

export const TableTitleWrapper = styled.div`
    font-size: 34px;
`
export const TableSearch = styled.input`
    margin-right: 50px;
    background: #E2F0F0;
    height: 32px;
    width: 330px;
    left: 0px;
    top: 0px;
    border-radius: 10px;
    border: 1px solid #C6CACC;
`

export const TableItemSearch = styled.input`
    background: #E2F0F0;
    height: 32px;
    width: 86px;
    left: 0px;
    top: 0px;
    border-radius: 10px;
    border: 1px solid #C6CACC;
`

export const MainTableColumn = styled.th`
    cursor: pointer;
    color: #919699;
    width: 330px;
    text-align: left;
`

export const DefaultTableColumn = styled.th`
    color: #919699;
    width: 118px;
    height: 64px;
    text-align: right;
`

export const MaintTableRow = styled.td`
    color: #000000DE;
    text-align: left;
    height: 64px;
    font-size: 20px;
    font-weight: 500;
` 

export const DefaultTableRow = styled.td`
    font-size: 20px;
    font-weight: 500;
    text-align: right;
    height: 64px;
`