import { useCSVReader } from "react-papaparse";
import ModalWindow from "./Modal";
import { arrayCreator } from "../utilits/utilits";
import { Absolute } from "../styled/Styled";

import type { CSVworkerPropTypes } from "../types/propTypes";
import type { Upload } from "../types/transactionTypes";
import { Box } from "@chakra-ui/layout";

const CSVworker: React.FC<CSVworkerPropTypes> = ({
  getFullList,
  changedData,
}) => {
  const { CSVReader } = useCSVReader();

  return (
    <>
      <CSVReader
        onUploadAccepted={(results: Upload) => {
          getFullList(arrayCreator(results.data));
        }}
      >
        {({ getRootProps, acceptedFile, ProgressBar }: any) => (
          <>
            <Box>
              <ModalWindow sureImport={getRootProps} type={"import"} />
              <ModalWindow data={changedData} />
            </Box>
            <Absolute top="200px" left="70px">
              <div>{acceptedFile && acceptedFile.name}</div>
              <ProgressBar />
            </Absolute>
          </>
        )}
      </CSVReader>
    </>
  );
};

export default CSVworker;
