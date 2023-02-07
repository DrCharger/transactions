import CSVworker from "./CSVworker";

import { NavBarPropTypes } from "../types/propTypes";
import { Box, Flex, Select } from "@chakra-ui/react";

const NavBar: React.FC<NavBarPropTypes> = ({
  getFullList,
  filterStatus,
  filterType,
  changedData,
}) => {
  return (
    <Flex justify={"space-between"} mb={5}>
      <Flex>
        <Select
          placeholder="Status"
          mr={5}
          onChange={(e) => filterStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </Select>
        <Select placeholder="Type" onChange={(e) => filterType(e.target.value)}>
          <option value="Refill">Refill</option>
          <option value="Withdrawal">Withdrawal</option>
        </Select>
      </Flex>
      <Box>
        <CSVworker getFullList={getFullList} changedData={changedData} />
      </Box>
    </Flex>
  );
};

export default NavBar;
