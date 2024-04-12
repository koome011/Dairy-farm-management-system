import React from "react";

import ProductionSidebar from "../../components/production/productionSidebar"
import Process_ingredientsTable from "../../components/production/Process_ingredientsTable"
import Process_resTable from "../../components/production/Process_resTable"
import Testdialog from "../../pages/Production/Testdialog"
import ProcessTable from "../../components/production/ProcessTable"
import ProductBatchTable from "../../components/production/Inventory/ProductbatchTable"
import ProductBatchForm from "../../components/production/Inventory/ProductBatchForm"



import { Container,Box,Typography,Button} from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2";


function ProductInventory() {
    
    
    
    return (
       
<Container maxWidth="100vw" style={{ margin: 0, padding: 0,overflow:'hidden' }}>
  {/*, height: '100vh', overflow: 'hidden' */}



      <Grid2 container sx={{ width: '100vw', position: 'relative' }}>
        <Grid2 item xs={1} sm={1}><ProductionSidebar/></Grid2>
        <Grid2 item xs={10} sm={3}></Grid2>
        <Grid2 item xs={10} sm={3}></Grid2> 
        <Grid2 item xs={10} sm={5}></Grid2> 
      </Grid2>

      <Grid2 container sx={{ width: '100vw', position: 'relative' }}>
        <Grid2 item xs={1}sm={1}><ProductionSidebar/></Grid2>
        <Grid2 item xs={10} sx={{ml:3,mr:3,mt:3}}><ProductBatchTable/></Grid2>
        
      </Grid2>

      

      <Grid2 container sx={{mt:4}} >
        <Grid2 item xs={1}></Grid2> 
        <Grid2 item sm={3} align="center" ></Grid2>
        <Grid2 item sm={3} align="center"><ProductBatchForm/></Grid2>
        <Grid2 item sm={5}></Grid2>
      </Grid2>

      </Container>
    
    );
}

export default ProductInventory;