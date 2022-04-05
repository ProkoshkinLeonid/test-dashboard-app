import { useEffect, useState } from "react";
import { DefaultTableColumn, MainTableColumn, TableSearch, TableTitleWrapper } from "./Table.styled"

export const Table = () => {

    const [data, setData] = useState([])

    const generateData = (s) => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        let id = 0

        return Array.from({ length: s }, () => {
            return { id: id++, Summary1: getRandomInt(999), Summary2: getRandomInt(999), Summary3: getRandomInt(999), Summary4: getRandomInt(999), Summary5: getRandomInt(999)}
        });
    }

    useEffect(() => {
        setData(generateData(6))
    }, [])

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
                    <td>{item.Summary1}</td>
                    <td>{item.Summary2}</td>
                    <td>{item.Summary3}</td>
                    <td>{item.Summary4}</td>
                    <td>{item.Summary5}</td>
                    </tr>
                ))}
        </tbody>
        </table>
        <TableSearch placeholder="search..."/>
    </div>
}