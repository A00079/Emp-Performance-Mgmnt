import React, { useState } from "react";
import Page from "@material-ui/lab/Pagination";

const Pagination = ({ setCurrentPage }) => {
  const [page, setPage] = useState(1);
  const handleCurrentPage = (event, value) => {
    setPage(value);
    setCurrentPage(value);
  };

  return (
    <div className="flex justify-center py-4">
      <Page
        onChange={handleCurrentPage}
        page={page}
        className="space-x-4"
        count={10}
        variant="outlined"
        shape="rounded"
        ne
        color="primary"
      />
    </div>
  );
};

export default Pagination;
