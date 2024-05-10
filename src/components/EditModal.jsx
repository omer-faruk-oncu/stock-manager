import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik } from "formik";
import AddModalForm, { firmSchema } from "./AddModalForm";
import useStockRequest from "../services/useStockRequest";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ firm, open, onClose }) {
  const { updateStock } = useStockRequest();

  const handleFormSubmit = (values) => {
    updateStock("firms", firm._id, values);
    //actions.setSubmitting(false);
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={{
              name: firm.name,
              phone: firm.phone,
              address: firm.address,
              image: firm.image,
            }}
            validationSchema={firmSchema}
            onSubmit={handleFormSubmit}
            component={props => <AddModalForm {...props} isEditing={true} />}
          ></Formik>
        </Box>
      </Modal>
    </div>
  );
}
