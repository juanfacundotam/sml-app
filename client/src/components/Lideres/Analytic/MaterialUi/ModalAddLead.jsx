import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import React, { useRef, useEffect } from "react";
import { textAlign } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  textAlign: "center",
  color: "white",
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ChildModal() {
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && containerRef.current) {
      inputRef.current.addEventListener("input", handleInput);
    }

    return () => {
      if (inputRef.current && containerRef.current) {
        inputRef.current.removeEventListener("input", handleInput);
      }
    };
  }, []);

  const handleInput = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button variant="contained" sx={{}} onClick={handleOpen}>
        Añadir Clientes
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: "30%",
            backgroundColor: "#39394b",
            height: "600px",
          }}
        >
          <div className="flex flex-col gap-5 p-8 h-full">
            <h2>Añadir Clientes</h2>
            <label>json</label>
            <div className="flex flex-col h-full text-black">
              <textarea
                ref={inputRef}
                type="text"
                style={{
                  width: "100%",
                  height: "400px",
                  color: "black",
                  textAlign: "start",
                  fontSize: "13px",
                }}
                placeholder="json"
              />
            </div>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
