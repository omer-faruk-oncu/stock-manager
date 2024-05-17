import Paper from "@mui/material/Paper";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import { Box, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { pink, deepPurple, amber } from "@mui/material/colors";
import { useSelector } from "react-redux";

const KPICards = () => {
    const {sales, purchases} = useSelector(state => state.stock)
    //console.log(sales, purchases)

    const totalSales = sales?.reduce((acc, sale) => acc + sale.amount, 0)
    const totalPurchases = purchases?.reduce((acc, purchase) => acc + purchase.amount, 0)

  const kpiData = [
    {
      id: 1,
      title: "Sales",
      icon: <MonetizationOnIcon sx={{ fontSize: "1.8rem" }} />,
      amount: "₺" + totalSales.toLocaleString("tr-TR"),
      color: deepPurple[700],
      bgColor: deepPurple[100],
    },
    {
      id: 2,
      title: "Profit",
      icon: <ShoppingCartIcon sx={{ fontSize: "1.7rem" }} />,
      amount: "₺" + (totalSales - totalPurchases).toLocaleString("tr-TR"),
      color: pink[700],
      bgColor: pink[100],
    },
    {
      id: 3,
      title: "purchases",
      amount: "₺" + totalPurchases.toLocaleString("tr-TR"),
      icon: <LocalMallIcon sx={{ fontSize: "1.7rem" }} />,
      color: amber[700],
      bgColor: amber[100],
    },
  ];
  return (
    <Stack
      justifyContent={"center"}
      direction={"row"}
      alignItems={"center"}
      flexWrap={"wrap"}
      gap={2}
    >
      {kpiData.map((data) => (
        <Paper
          key={data.id}
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: 275,
            p: 2,
            pl: 3,
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              bgcolor: data.bgColor,
              color: data.color,
              width: 60,
              height: 60,
            }}
          >
            {data.icon}
          </Avatar>
          <Box>
            <Typography variant="button">{data.title}</Typography>
            <Typography variant="h5">{data.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default KPICards;
