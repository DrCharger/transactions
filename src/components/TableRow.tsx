import { useState } from "react";
import PopOver from "./PopOver";

import { TableRowPropTypes } from "../types/propTypes";
import { Tr, Td, Flex, Button } from "@chakra-ui/react";

const TableRow: React.FC<TableRowPropTypes> = ({ item }) => {
  const [opened, setOpened] = useState(false);

  return (
    <Tr className="tablehover" onClick={() => setOpened(true)}>
      <Td maxWidth={"60px"}>{item.id}</Td>
      <Td>{item.status}</Td>
      <Td>{item.type}</Td>
      <Td>{item.name}</Td>
      <Td>{item.amount}</Td>
      <Td w={"350px"}>
        {opened && item.id && (
          <Flex justify={"space-around"}>
            <PopOver type id={item.id} prevStatus={item.status} />
            <PopOver id={item.id} />
            <Button
              color={"#fff"}
              background={"#646cff"}
              _hover={{ color: "#fff", background: "#0511fb" }}
              onClick={(e) => {
                e.stopPropagation();
                setOpened(false);
              }}
            >
              Close
            </Button>
          </Flex>
        )}
      </Td>
    </Tr>
  );
};

export default TableRow;
