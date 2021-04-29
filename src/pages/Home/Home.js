import React, { useState } from "react";
import { Stats } from "./components";
import { Card, Text } from "../../components";

const Home = () => {
  return (
    <div className="p-4 space-y-4">
      <Stats />

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <Card shadow="md" rounded="md">
            <div className="p-4 space-y-4">
              {[...new Array(10)].map((el, index) => (
                <div className="flex space-x-6">
                  <div className="">
                    <Text variant="blue" weight="800">
                      {index}.
                    </Text>
                  </div>
                  <div>
                    <Text weight="600" variant="primary">
                      Employee Name
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="col-span-3">
          <Card shadow="md" rounded="md">
            <div className="text-center">
              <Text>Employee Performance</Text>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
