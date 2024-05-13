import { useEffect, useState } from "react";

import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SaleModal from "../components/SaleModal";
import SaleTable from "../components/SaleTable";

const Sales = () => {
  const { getStock } = useStockRequest();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    image: "",
    address: "",
  });

  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      phone: "",
      image: "",
      address: "",
    });
  };

  useEffect(() => {
    getStock("sales");
  }, []);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} sx={{mb:3}}>
        New Sale
      </Button>

      <SaleModal
        handleClose={handleClose}
        open={open}
        info={info}
        setInfo={setInfo}
      />

      <SaleTable handleOpen={handleOpen} setInfo={setInfo}/>
    </div>
  );
};

export default Sales;
