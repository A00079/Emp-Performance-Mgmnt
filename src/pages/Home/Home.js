import React, { useState, useEffect } from "react";
import { Stats, EmployeeStats, OffersTable } from "./components";

const Home = () => {
  return (
    <div className="p-3 space-y-4 bg-white">
      <Stats />
      <EmployeeStats />
      <OffersTable />
    </div>
  );
};

export default Home;
