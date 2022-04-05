import { useEffect, useState } from "react"
import { Rightbar } from "../../Components/Rightbar/Rightbar"
import { Table } from "../../Components/Table/Table"
import { AnalyzePageContainer } from "./AnalyzePage.styled"

export const AnalyzePage = () => {

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

    useEffect(() => {
        getData(4)
    }, [])

    useEffect(() => {
        if (!filter && !isLoading) {
            setFilteredData(data)
        }
    }, [filter, data, isLoading])

    return <AnalyzePageContainer>
     <Rightbar/>
     <Table 
        filterByDataId={filterByDataId} 
        filter={filter}  
        filteredData={filteredData} 
        allFilterDataHandler={allFilterDataHandler} 
        isLoading={isLoading}
    />
    </AnalyzePageContainer>
}