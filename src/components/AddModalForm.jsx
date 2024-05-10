import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { object, string } from "yup";
import useStockRequest from "../services/useStockRequest";

export const firmSchema = object({
  name: string().required("Firma adı zorunludur"),
  phone: string().required("Telefon numarası zorunludur"),
  address: string().required("Adres zorunludur"),
  image: string().required("Resim zorunludur"),
});

const AddModalForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  //handleSubmit,
  isEditing
}) => {
  const { createStock, updateStock } = useStockRequest();

  const handleSubmit = () => {
    if (isEditing) {
      updateStock("firms", values);
    } else {
      createStock("firms", values);
    }
  };

  return (
    <Form
 
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Firm Name"
          name="name"
          id="Name"
          type="text"
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          label="Phone"
          name="phone"
          id="phone"
          type="text"
          variant="outlined"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && Boolean(errors.phone)}
          helperText={touched.phone && errors.phone}
        />
        <TextField
          label="Address"
          name="address"
          id="address"
          type="text"
          variant="outlined"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.address && Boolean(errors.address)}
          helperText={touched.address && errors.address}
        />
        <TextField
          label="Image"
          name="image"
          id="image"
          type="text"
          variant="outlined"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.image && Boolean(errors.image)}
          helperText={touched.image && errors.image}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          onClick={handleSubmit}
        >
         {isEditing ? 'Save' : 'Add Firm'}
        </Button>
      </Box>
    </Form>
  );
};

export default AddModalForm;
