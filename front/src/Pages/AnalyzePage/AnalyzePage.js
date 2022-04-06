import { useEffect, useState } from "react";
import { Rightbar } from "../../Components/Rightbar/Rightbar";
import { Table } from "../../Components/Table/Table";
import {
  DefaultTableColumn,
  DefaultTableRow,
  TableItemSearch,
  TableSearch,
} from "../../Components/Table/Table.styled";
import { AnalyzePageContainer } from "./AnalyzePage.styled";

export const AnalyzePage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newDataItem, setNewDataItem] = useState({
    id: null,
    Summary1: null,
    Summary2: null,
    Summary3: null,
    Summary4: null,
    Summary5: null,
  });

  const getData = (length) => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    let id = 1;
    setIsLoading(true);
    setTimeout(
      () =>
        setData(
          Array.from({ length }, () => {
            setIsLoading(false);
            return {
              id: id++,
              Summary1: getRandomInt(999),
              Summary2: getRandomInt(999),
              Summary3: getRandomInt(999),
              Summary4: getRandomInt(999),
              Summary5: getRandomInt(999),
            };
          })
        ),
      3000
    );
  };

  const allFilterDataHandler = (e) => {
    setTimeout(() => {
      setFilter(e.target.value);
      if (e.target.value) {
        const newData = data.filter(
          (num) =>
            (num.Summary1 ||
              num.Summary2 ||
              num.Summary3 ||
              num.Summary4 ||
              num.Summary5) === +e.target.value
        );
        setIsLoading(true);
        setTimeout(() => {
          setFilteredData(newData);
          setIsLoading(false);
        }, 1500);
      }
    }, 1300);
  };

  const filterByDataId = () => {
    if (filteredData[0].id > filteredData[1].id) {
      setFilteredData((prevState) => [
        ...prevState.sort((a, b) => a.id - b.id),
      ]);
    } else {
      setFilteredData((prevState) => [
        ...prevState.sort((a, b) => b.id - a.id),
      ]);
    }
  };

  const newDataItemHandler = (e, field) => {
    setNewDataItem((prevState) => ({
      ...prevState,
      [field]: +e.target.value,
    }));
  };

  const createNewItem = () => {
    const id = filteredData[filteredData.length - 1].id + 1;
    setFilteredData((prevState) => [
      ...prevState,
      {
        ...newDataItem,
        id,
      },
    ]);
    setNewDataItem({
      id: null,
      Summary1: "",
      Summary2: "",
      Summary3: "",
      Summary4: "",
      Summary5: "",
    });
  };

  useEffect(() => {
    getData(8);
  }, []);

  useEffect(() => {
    if (!filter && !isLoading) {
      setFilteredData(data);
    }
  }, [filter, data, isLoading]);

  const footer = (
    <div style={{ display: "flex" }}>
      <TableSearch
        disabled={isLoading}
        type={"number"}
        onChange={(e) => allFilterDataHandler(e)}
        placeholder="Search..."
      />
      <DefaultTableRow>
        <TableItemSearch
          value={newDataItem.Summary1}
          type={"number"}
          onChange={(e) => newDataItemHandler(e, "Summary1")}
        />
      </DefaultTableRow>
      <DefaultTableColumn>
        <TableItemSearch
          value={newDataItem.Summary2}
          type={"number"}
          onChange={(e) => newDataItemHandler(e, "Summary2")}
        />
      </DefaultTableColumn>
      <DefaultTableColumn>
        <TableItemSearch
          value={newDataItem.Summary3}
          type={"number"}
          onChange={(e) => newDataItemHandler(e, "Summary3")}
        />
      </DefaultTableColumn>
      <DefaultTableColumn>
        <TableItemSearch
          value={newDataItem.Summary4}
          type={"number"}
          onChange={(e) => newDataItemHandler(e, "Summary4")}
        />
      </DefaultTableColumn>
      <DefaultTableColumn>
        <TableItemSearch
          value={newDataItem.Summary5}
          type={"number"}
          onChange={(e) => newDataItemHandler(e, "Summary5")}
        />
      </DefaultTableColumn>
    </div>
  );

  return (
    <AnalyzePageContainer>
      <Rightbar createNewItem={createNewItem} />
      <Table
        footer={footer}
        filterByDataId={filterByDataId}
        filter={filter}
        filteredData={filteredData}
        allFilterDataHandler={allFilterDataHandler}
        isLoading={isLoading}
      />
    </AnalyzePageContainer>
  );
};
