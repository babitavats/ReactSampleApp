// pages/NextPage.js
import React, { useEffect, useState } from "react";
import { Container, Box, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { getTableData1, getTableCount1 } from "api";
import { useNavigate } from 'react-router-dom';
import "../App.css";


const columns = [
  { field: "ProductID", headerName: "ProductID", width: 250 },
  { field: "ProductName", headerName: "ProductName", flex: 1 },
  { field: "SupplierID", headerName: "SupplierID", flex: 1 }
];


const PAGE_SIZE = 15;

export default function SecondPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Number of rows which exist on the service
  const [rowCount, setRowCount] = useState(0);


  const loadData = async (isFirstLoad, skip = 0) => {
    try {
      setItems([]);
      setLoading(true);

      if (isFirstLoad) {
        const count = await getTableCount1();
        setRowCount(count);
      }

      const _items = await getTableData1({
        $top: PAGE_SIZE,
        $skip: skip
      });
      const itemsWithIds = _items.map((item, index) => {
        item.id = index;
        return item;
      });
      setItems(itemsWithIds);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChanged = ({ page }) => {
    loadData(false, page * PAGE_SIZE);
  };

  useEffect(() => {
    // when component mounted
    loadData(true);
  }, []);



  return (
    <Container disableGutters>
      <Box height="80vh" py={5}>
        <DataGrid
          loading={loading}
          rows={items}
          columns={columns}
          pageSize={PAGE_SIZE}
          paginationMode="server"
          rowCount={rowCount}
          onPageChange={handlePageChanged}
        />
        </Box>
      

    </Container>
    
    
  );
}



// import React from 'react';

// const SecondPage = () => {
//   return (
//     <div>
//       <h1>SecondPage Page</h1>
//       <p>This is the content of the next page.</p>
//     </div>
//   );
// };

// export default SecondPage;
