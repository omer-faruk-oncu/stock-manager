import { useEffect, useState } from "react"

import useStockRequest from "../services/useStockRequest"
import { useSelector } from "react-redux"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import ProductModal from "../components/ProductModal"
import ProductTable from "../components/ProductTable"



const Products = () => {

  const { getStock } = useStockRequest()
  const { products } = useSelector((state) => state.stock)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    image: "",
    address: "",
  })

  const handleClose = () => {
    setOpen(false)
    setInfo({
      name: "",
      phone: "",
      image: "",
      address: "",
    })
  }

  useEffect(() => {

    getStock("products")
  }, [])

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={2}>
        Product
    
      </Typography>

      <Button variant="contained" onClick={handleOpen} sx={{mb:3}}>
        New Product
      </Button>

      <ProductModal
        handleClose={handleClose}
        open={open}
        info={info}
        setInfo={setInfo}
      />

     <ProductTable />
    </div>
  )
}

export default Products
