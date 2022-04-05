import { useEffect, useState } from "react";
import { 
    DefaultTableColumn, 
    DefaultTableRow, 
    MainTableColumn, 
    MaintTableRow, 
    TableItemSearch, 
    TableSearch, 
    TableTitleWrapper } from "./Table.styled"

export const Table = () => {

    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [filter, setFilter] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const getData = (length) => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        let id = 1
        setIsLoading(true)
        setTimeout(() => setData(Array.from({ length }, () => {
            setIsLoading(false)
            return { 
                id: id++, 
                Summary1: getRandomInt(999), 
                Summary2: getRandomInt(999), 
                Summary3: getRandomInt(999), 
                Summary4: getRandomInt(999), 
                Summary5: getRandomInt(999)}
        })), 3000)
    }

    const allFilterDataHandler = (e) => {
       setTimeout(() => {
        setFilter(e.target.value)
        if(e.target.value) {
                const newData = data.filter(num => (num.Summary1 || num.Summary2 || num.Summary3 || num.Summary4 || num.Summary5)  === +e.target.value)
                setIsLoading(true)
                setTimeout(() => {
                    setFilteredData(newData)
                    setIsLoading(false)
                }, 1500)
            }
        }, 1300)
    }

    const filterByDataId = () => {
        if (filteredData[0].id > filteredData[1].id) {
            setFilteredData(prevState => [...prevState.sort((a,b) => a.id-b.id)])
        } else {
            setFilteredData(prevState => [...prevState.sort((a,b) => b.id-a.id)])
        }
    }

    console.log(filteredData);

    useEffect(() => {
        getData(4)
    }, [])

    useEffect(() => {
        if (!filter && !isLoading) {
            setFilteredData(data)
        }
    }, [filter, data, isLoading])

    return <div>
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
    </div>
}