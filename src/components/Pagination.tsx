import React, { useMemo, useState } from "react";
import { StyledPaginItem } from "../styled/Styled";

import { PaginationPropTypes } from "../types/propTypes";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";

const Pagination: React.FC<PaginationPropTypes> = ({
  count,
  page,
  onChange,
}) => {
  const [paginaton, setPagination] = useState<Array<number>>([]);

  useMemo(() => {
    let boxArray = Array(count)
      .fill(0)
      .map((item, index) => (item = index + 1));
    if (count > 7) {
      boxArray = boxArray.slice(0, 3).concat(0).concat(boxArray.slice(-3));
    }
    setPagination(boxArray);
  }, [count]);

  const onMinus = () => {
    if (page <= 1) return null;
    onChange(page - 1);
  };
  const onPlus = () => {
    if (page >= count) return null;
    onChange(page + 1);
  };

  return (
    <Flex direction={"row"} justify={"center"} mt={5}>
      <StyledPaginItem active={false} onClick={onMinus}>
        <ChevronLeftIcon />
      </StyledPaginItem>
      {paginaton.map((number) =>
        number === 0 ? (
          <div key={number}>
            {paginaton.includes(page) ? (
              <StyledPaginItem>...</StyledPaginItem>
            ) : (
              <StyledPaginItem active>{page}</StyledPaginItem>
            )}
          </div>
        ) : (
          <StyledPaginItem
            key={number}
            active={number === page}
            onClick={() => onChange(number)}
          >
            {number}
          </StyledPaginItem>
        )
      )}
      <StyledPaginItem onClick={onPlus}>
        <ChevronRightIcon />
      </StyledPaginItem>
    </Flex>
  );
};

export default Pagination;
