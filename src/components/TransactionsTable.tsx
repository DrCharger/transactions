import React from "react";
import Pagination from "./Pagination";
import TableRow from "./TableRow";

import type { TableProps } from "../types/propTypes";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

const TransactionsTable: React.FC<TableProps> = ({
  currentItem,
  count,
  page,
  length,
  setCurrentPage,
}) => {
  return (
    <>
      <TableContainer sx={{ overflow: "hidden" }}>
        <Table border={"1px solid #000"}>
          <Thead>
            <Tr sx={{ height: "60px", borderBottom: "1px solid #000" }}>
              <Th maxWidth={"100px"}>Id</Th>
              <Th>Status</Th>
              <Th>Type</Th>
              <Th>Client Name</Th>
              <Th>Amount</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItem.map((item, index) => (
              <TableRow key={item.id + item.amount + index} item={item} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(length / count)}
        page={page}
        onChange={setCurrentPage}
      />
    </>
  );
};

export default TransactionsTable;
