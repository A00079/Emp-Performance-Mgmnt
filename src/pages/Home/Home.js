import React, { useState } from "react";
import { Card, DropDown, Text } from "../../components";
import DatePicker from "react-date-picker";

const Home = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="p-4">
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-5">
          <Card shadow="lg" color="white" rounded="lg" classes="p-4">
            {/* <DropDown /> */}
            <div className="space-y-10">
              <div className="flex space-x-6 items-center relative">
                <div className="border-b-2 border-blue-500">Today</div>
                <div>This Week</div>
                <div>This Month</div>
                <div className="absolute right-2">
                  <DatePicker value={value} />
                </div>
              </div>
              <div className="flex justify-between p-4 bg-blue-50">
                <div>
                  <div>
                    <Text size="xl4" variant="blue">
                      283
                    </Text>
                  </div>
                  <div className="text-center">
                    <small>
                      <Text>conversions</Text>
                    </small>
                  </div>
                </div>
                <div className="self-end">
                  <div>
                    <Text size="xl">18752.35</Text>
                  </div>
                  <div className="text-center">
                    <small>
                      <Text>Revenue</Text>
                    </small>
                  </div>
                </div>
                <div className="self-end">
                  <div>
                    <Text size="xl">5485.23</Text>
                  </div>
                  <div className="text-center">
                    <small>
                      <Text>Payout</Text>
                    </small>
                  </div>
                </div>
                <div className="self-end">
                  <div>
                    <Text size="xl">6521</Text>
                  </div>
                  <div className="text-center">
                    <small>
                      <Text>Earning</Text>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-3">
          <Card shadow="lg" color="white" rounded="lg" classes="p-2">
            <div className="space-y-12">
              <div className="flex justify-between px-2">
                <div className="text-center">
                  <div>25</div>
                  <Text size="xs">Total Offers</Text>
                </div>
                <div className="text-center">
                  <div>25</div>

                  <Text size="xs">Active Offers</Text>
                </div>
                <div className="text-center">
                  <div>25</div>

                  <Text size="xs">Pending Applications</Text>
                </div>
              </div>
              <div className="flex justify-between px-2">
                <div className="text-center">
                  <div>25</div>
                  <Text size="xs"> Total Affiliates</Text>{" "}
                </div>
                <div className="text-center">
                  <div>25</div>
                  <Text size="xs"> Active Affiliates</Text>{" "}
                </div>
                <div className="text-center">
                  <div>25</div>
                  <Text size="xs"> Pending Affiliates</Text>{" "}
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-2">
          <Card shadow="lg" color="white" rounded="lg" classes="p-2">
            <div className="flex justify-between px-2 h-36">
              <div>REvenue</div>
              <div>Earning</div>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 h-80 shadow-lg">employee lsit</div>
        <div className="col-span-6 h-80 shadow-lg">emloyee perforance</div>
        <div className="col-span-4 h-80 shadow-lg">employee attendance</div>
      </div>
    </div>
  );
};

export default Home;
