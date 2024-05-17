import { useEffect } from "react";
import Charts from "../components/Charts";
import KPICards from "../components/KPICards";
import useStockRequest from "../services/useStockRequest";

const Home = () => {
  
  const { getStock } = useStockRequest();
  
  
  useEffect(() => {
    getStock("sales");
    getStock("purchases");
  }, []);
  
  return (
    <div>
      <KPICards />
      <Charts />
    </div>
  );
};

export default Home;
