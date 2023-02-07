import React, { useState } from "react";
import { connect } from "react-redux";

import { transactionListRecieved } from "../transactionsStore/transactions.actions";
import { allTransactionsSelector } from "../transactionsStore/transactions.selectors";

import type { PopOverPropTypes } from "../types/propTypes";
import type { TransactionsState } from "../types/transactionTypes";
import * as chakra from "@chakra-ui/react";

const PopOver: React.FC<PopOverPropTypes> = ({
  allTransactions,
  type,
  getFullList,
  id,
  prevStatus,
}) => {
  const [status, setStatus] = useState("");

  const handleDeleteElement = () => {
    const deleted = allTransactions.filter((elem) => elem.id !== id);
    getFullList(deleted);
  };

  const handleEditElement = () => {
    const edited = allTransactions.map((elem) =>
      elem.id !== id ? elem : { ...elem, status }
    );
    getFullList(edited);
  };

  return (
    <chakra.Popover>
      <chakra.PopoverTrigger>
        <chakra.Button
          color={"#fff"}
          background={"#646cff"}
          _hover={{ color: "#fff", background: "#0511fb" }}
        >
          {type ? "Edit" : "Delete"}
        </chakra.Button>
      </chakra.PopoverTrigger>
      <chakra.Portal>
        <chakra.PopoverContent>
          <chakra.PopoverArrow />
          <chakra.PopoverHeader>
            Want to {type ? "Edit" : "Delete"}?
          </chakra.PopoverHeader>
          <chakra.PopoverCloseButton />
          <chakra.PopoverBody>
            {type ? (
              <>
                <chakra.Select
                  defaultValue={prevStatus}
                  mr={5}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </chakra.Select>
                <chakra.Button mt={5} onClick={handleEditElement}>
                  Save
                </chakra.Button>
              </>
            ) : (
              <chakra.Button onClick={handleDeleteElement}>Yes!</chakra.Button>
            )}
          </chakra.PopoverBody>
        </chakra.PopoverContent>
      </chakra.Portal>
    </chakra.Popover>
  );
};

const mapState = (state: { transactionList: TransactionsState }) => {
  return {
    allTransactions: allTransactionsSelector(state),
  };
};
const mapDispatch = {
  getFullList: transactionListRecieved,
};

export default connect(mapState, mapDispatch)(PopOver);
