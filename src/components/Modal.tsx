import { useRef, useState } from "react";
import { useCSVDownloader } from "react-papaparse";

import type { ModalPropTypes } from "../types/propTypes";
import * as chakra from "@chakra-ui/react";

const ModalWindow: React.FC<ModalPropTypes> = ({ sureImport, data, type }) => {
  const { isOpen, onOpen, onClose } = chakra.useDisclosure();
  const finalRef = useRef(null);
  const { CSVDownloader, Type } = useCSVDownloader();
  const [name, setName] = useState("");

  return (
    <>
      <chakra.Button
        onClick={onOpen}
        m={"0 10px"}
        background={"rgb(104, 92, 238)"}
        color={"#fff"}
      >
        {type ? "Import" : "Export"}
      </chakra.Button>
      <chakra.Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <chakra.ModalOverlay />
        <chakra.ModalContent>
          <chakra.ModalHeader>{type ? "IMPORT" : "EXPORT"}</chakra.ModalHeader>
          <chakra.ModalCloseButton />
          <chakra.ModalBody>
            Are you sure to
            {type
              ? " import the information about your transactions?"
              : " download?"}
            {!type && (
              <chakra.Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                mt={5}
                placeholder={
                  "Name please your file, or it will be named by default!"
                }
              />
            )}
          </chakra.ModalBody>
          <chakra.ModalFooter>
            {type ? (
              <chakra.Button
                variant="ghost"
                {...sureImport()}
                onMouseUp={onClose}
              >
                YEAH!!!
              </chakra.Button>
            ) : (
              <CSVDownloader
                type={Type.Button}
                filename={name || "default"}
                bom={true}
                config={{
                  delimiter: ";",
                }}
                data={data}
              >
                Download
              </CSVDownloader>
            )}
          </chakra.ModalFooter>
        </chakra.ModalContent>
      </chakra.Modal>
    </>
  );
};

export default ModalWindow;
