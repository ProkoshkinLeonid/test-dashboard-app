import { useEffect, useState } from "react";
import {
  DefaultTableColumn,
  DefaultTableRow,
  MainTableColumn,
  MaintTableRow,
  TableContainer,
  TableItemSearch,
  TableSearch,
  TableTitleWrapper,
} from "./Table.styled";

export const Table = ({
  filterByDataId,
  isLoading,
  filter,
  filteredData,
  allFilterDataHandler,
  footer,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
    <TableTitleWrapper>Dashboard</TableTitleWrapper>
      <TableContainer>
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
            {!filteredData.length && !!filter && !isLoading && (
              <div>Ничего не нашли:(</div>
            )}
            {isLoading ? (
              <div>Идёт загрузка данных...</div>
            ) : (
              filteredData.map((item) => (
                <tr>
                  <MaintTableRow>Data{item.id}</MaintTableRow>
                  <DefaultTableRow>{item.Summary1}</DefaultTableRow>
                  <DefaultTableRow>{item.Summary2}</DefaultTableRow>
                  <DefaultTableRow>{item.Summary3}</DefaultTableRow>
                  <DefaultTableRow>{item.Summary4}</DefaultTableRow>
                  <DefaultTableRow>{item.Summary5}</DefaultTableRow>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </TableContainer>
      {footer}
    </div>
  );
};
