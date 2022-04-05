import { Rightbar } from "../../Components/Rightbar/Rightbar"
import { Table } from "../../Components/Table/Table"
import { AnalyzePageContainer } from "./AnalyzePage.styled"

export const AnalyzePage = () => {
    return <AnalyzePageContainer>
     <Rightbar/>
     <Table/>
    </AnalyzePageContainer>
}