import React, { useEffect, useState } from "react";
import { Container, Box, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { getTableData, getTableCount } from "api";
import { useNavigate } from 'react-router-dom';
import "../App.css";


const columns = [
  { field: "CustomerID", headerName: "CustomerID", width: 250 },
  { field: "CompanyName", headerName: "CompanyName", flex: 1 },
  { field: "Address", headerName: "Address", flex: 1 }
];


const PAGE_SIZE = 15;

export default function MasterPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Number of rows which exist on the service
  const [rowCount, setRowCount] = useState(0);
  const navigate = useNavigate();

  const loadData = async (isFirstLoad, skip = 0) => {
    try {
      setItems([]);
      setLoading(true);

      if (isFirstLoad) {
        const count = await getTableCount();
        setRowCount(count);
      }

      const _items = await getTableData({
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

  const handleSubmitClick = () => {
    navigate('secondpage'); // Navigate to SecondPage
  };


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
        <Button variant="contained" color="primary" className="button" onClick={handleSubmitClick}> {"Submit"} </Button>
      </Box>
      

    </Container>
    
    
  );
}