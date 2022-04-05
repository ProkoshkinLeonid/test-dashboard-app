import { useEffect, useState } from "react";
import { 
    DefaultTableColumn, 
    DefaultTableRow, 
    MainTableColumn, 
    MaintTableRow, 
    TableContainer, 
    TableItemSearch, 
    TableSearch, 
    TableTitleWrapper } from "./Table.styled"

export const Table = ({filterByDataId, isLoading, filter, filteredData, allFilterDataHandler}) => {

    return <TableContainer>
        <TableTitleWrapper>Dashboard</TableTitleWrapper>
        <table>
            <thead>
                <MainTableColumn onClick={filterByDataId}>Data</MainTableColumn>
                <DefaultTableColumn>Summary1</DefaultTableColumn>
                <DefaultTableColumn>Summary2</DefaultTableColumn>
                <DefaultTableColumn>Summary3</DefaultTableColumn>
                <DefaultTableColumn>Summary4</DefaultTableColumn>
                <DefaultTableColumn>Summary5</DefaultTableColumn>
            </thead>
            <tbody>
                {(!filteredData.length && !!filter && !isLoading) && <div>Ничего не нашли:(</div>}
                {isLoading ? <div>Идёт загрузка данных...</div> : filteredData.map(item => (
                        <tr>
                        <MaintTableRow>Data{item.id}</MaintTableRow>
                        <DefaultTableRow>{item.Summary1}</DefaultTableRow>
                        <DefaultTableRow>{item.Summary2}</DefaultTableRow>
                        <DefaultTableRow>{item.Summary3}</DefaultTableRow>
                        <DefaultTableRow>{item.Summary4}</DefaultTableRow>
                        <DefaultTableRow>{item.Summary5}</DefaultTableRow>
                        </tr>
                    ))}
            </tbody>
            <tfoot>
                <th><TableSearch disabled={isLoading} type={'number'} onChange={(e) => allFilterDataHandler(e)} placeholder="Search..."/></th>
                <DefaultTableRow onChange={(e) => allFilterDataHandler(e)}>
                    <TableItemSearch/>
                </DefaultTableRow>
                <DefaultTableColumn>
                    <TableItemSearch/>
                </DefaultTableColumn>
                <DefaultTableColumn>
                    <TableItemSearch/>
                </DefaultTableColumn>
                <DefaultTableColumn>
                    <TableItemSearch/>
                </DefaultTableColumn>
                <DefaultTableColumn>
                    <TableItemSearch/>
                </DefaultTableColumn>
            </tfoot>
        </table>
    </TableContainer>
}