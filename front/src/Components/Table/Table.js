import { useEffect, useState } from "react";
import { DefaultTableColumn, DefaultTableRow, MainTableColumn, TableItemSearch, TableSearch, TableTitleWrapper } from "./Table.styled"

export const Table = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(null)

    const generateData = (s) => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        let id = 0

        return Array.from({ length: s }, () => {
            return { id: id++, Summary1: getRandomInt(999), Summary2: getRandomInt(999), Summary3: getRandomInt(999), Summary4: getRandomInt(999), Summary5: getRandomInt(999)}
        });
    }

    const onFilterDataHandler = (e) => {
        setFilter(e.target.value)
    }

    useEffect(() => {
        setData(generateData(4))
    }, [])

    console.log(filter);

    return <div>
        <TableTitleWrapper>Dashboard</TableTitleWrapper>
        <table>
            <thead>
            <MainTableColumn>Data</MainTableColumn>
            <DefaultTableColumn>Summary1</DefaultTableColumn>
            <DefaultTableColumn>Summary2</DefaultTableColumn>
            <DefaultTableColumn>Summary3</DefaultTableColumn>
            <DefaultTableColumn>Summary4</DefaultTableColumn>
            <DefaultTableColumn>Summary5</DefaultTableColumn>
            </thead>
            <tbody>
            {data.map(item => (
                    <tr>
                    <td>{item.id}</td>
                    <DefaultTableRow>{item.Summary1}</DefaultTableRow>
                    <DefaultTableRow>{item.Summary2}</DefaultTableRow>
                    <DefaultTableRow>{item.Summary3}</DefaultTableRow>
                    <DefaultTableRow>{item.Summary4}</DefaultTableRow>
                    <DefaultTableRow>{item.Summary5}</DefaultTableRow>
                    </tr>
                ))}
        </tbody>
        <tfoot>
        <th><TableSearch type={'number'} onChange={(e) => onFilterDataHandler(e)} placeholder="search..."/></th>
        <DefaultTableRow>
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
    </div>
}