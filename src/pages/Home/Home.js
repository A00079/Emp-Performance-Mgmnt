import React, { useState, useEffect } from "react";
import { Stats, EmployeeStats, OffersTable } from "./components";

const Home = () => {
  return (
    <div className="p-4 space-y-4">
      <Stats />
      <EmployeeStats />
      <OffersTable />
    </div>
  );
};

export default Home;
