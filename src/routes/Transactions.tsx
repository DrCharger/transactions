import { useMemo, useState } from "react";
import { connect } from "react-redux";
import TransactionsTable from "../components/TransactionsTable";
import NavBar from "../components/NavBar";
import { StyledHeader } from "../styled/Styled";
import { correctPagination } from "../utilits/utilits";

import * as actions from "../transactionsStore/transactions.actions";
import * as selectors from "../transactionsStore/transactions.selectors";

import { TransactionsState } from "../types/transactionTypes";
import { TransactionsPropTypes } from "../types/propTypes";
import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";

const Transactions: React.FC<TransactionsPropTypes> = (props) => {
  const { user, allTransactions, filter, changedData, getFilteredList } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  let currentItem = correctPagination(
    changedData,
    currentPage,
    transactionsPerPage
  );

  useMemo(() => {
    let filtered = allTransactions.filter(
      (elem) =>
        elem.status.includes(filter.status) && elem.type.includes(filter.type)
    );
    getFilteredList(filtered);
  }, [filter, allTransactions]);

  return (
    <Box>
      <Flex align="center">
        <Avatar name={user.fullname} bg="green.500" />
        <StyledHeader>Hello, {user.fullname}</StyledHeader>
      </Flex>
      <Flex mt={10}>
        <Box w={"300px"} mr={10}>
          <Box sx={{ border: "1px solid #000" }}>
            <Heading as="h5" size="sm" background={"blue.400"} p={3}>
              Transactions
            </Heading>
            <Box height={200} sx={{ border: "1px solid #000" }}></Box>
          </Box>
        </Box>
        <Flex direction={"column"} flex={1}>
          <NavBar {...props} />
          <TransactionsTable
            currentItem={currentItem}
            count={transactionsPerPage}
            page={currentPage}
            length={changedData.length}
            setCurrentPage={setCurrentPage}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

const mapState = (state: { transactionList: TransactionsState }) => {
  return {
    user: selectors.userSelector(state),
    allTransactions: selectors.allTransactionsSelector(state),
    filter: selectors.filterSelector(state),
    changedData: selectors.changerDataSelector(state),
  };
};

const mapDispatch = {
  getFullList: actions.transactionListRecieved,
  filterStatus: actions.transactionFilterStatus,
  filterType: actions.transactionFilterType,
  getFilteredList: actions.transactionListAfterActions,
};

export default connect(mapState, mapDispatch)(Transactions);
