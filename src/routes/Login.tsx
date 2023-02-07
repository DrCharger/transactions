import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { StyledContainer, StyledModal } from "../styled/Styled";
import { usersLogged } from "../transactionsStore/transactions.actions";

import type { User } from "../types/transactionTypes";
import type { LoginPropTypes } from "../types/propTypes";
import * as chakra from "@chakra-ui/react";

const Login: React.FC<LoginPropTypes> = ({ logged }) => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm<User>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<User> = (data) => {
    logged(data);
    navigate("/transactions");
  };

  return (
    <StyledContainer>
      <StyledModal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <chakra.Box mt={4} mb={4}>
            <chakra.FormLabel>FullName</chakra.FormLabel>
            <chakra.Input
              placeholder="Type your name"
              variant="flushed"
              {...register("fullname", { required: true })}
            />
          </chakra.Box>
          <chakra.Box mt={4} mb={4}>
            <chakra.FormLabel>Password</chakra.FormLabel>
            <chakra.InputGroup size="md">
              <chakra.Input
                variant="flushed"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              <chakra.InputRightElement width="4.5rem">
                <chakra.Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShow(!show)}
                >
                  {show ? "Hide" : "Show"}
                </chakra.Button>
              </chakra.InputRightElement>
            </chakra.InputGroup>
          </chakra.Box>
          <chakra.Box mt={6} mb={4}>
            <chakra.Input type="submit" />
          </chakra.Box>
        </form>
      </StyledModal>
    </StyledContainer>
  );
};

const mapDispatch = {
  logged: usersLogged,
};

export default connect(null, mapDispatch)(Login);
