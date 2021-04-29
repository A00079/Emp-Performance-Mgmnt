import React, { useState } from "react";
import { Card, Text } from "../../../../components";
import DatePicker from "react-date-picker";

const Stats = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="grid grid-cols-10 gap-4">
      <div className="col-span-5">
        <Card shadow="md" rounded="md">
          {/* <DropDown /> */}
          <div className="h-40 space-y-6 p-2">
            <div className="flex space-x-6 items-center relative">
              <div className="border-b-2 border-blue-500">Today</div>
              <div>This Week</div>
              <div>This Month</div>
              <div className="absolute right-2">
                <DatePicker maxDate={new Date()} value={value} onChange={onChange} />
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
        <Card shadow="md" rounded="md">
          <div className="h-40 space-y-6 p-2">
            <div className="flex justify-between px-2">
              <div className="text-center">
                <div>
                  <Text variant="blue" size="md" weight="600">
                    250
                  </Text>
                </div>
                <Text size="xs" weight="600" variant="primary">
                  Total Offers
                </Text>
              </div>
              <div className="text-center">
                <div>
                  <Text variant="blue" size="md" weight="600">
                    250
                  </Text>
                </div>

                <Text size="xs" weight="600" variant="primary">
                  Active Offers
                </Text>
              </div>
              <div className="text-center">
                <div>
                  <Text variant="blue" size="md" weight="600">
                    250
                  </Text>
                </div>

                <Text size="xs" weight="600" variant="primary">
                  Pending Applications
                </Text>
              </div>
            </div>
            <div className="flex justify-between px-2">
              <div className="text-center">
                <div>
                  <Text variant="blue" size="md" weight="600">
                    250
                  </Text>
                </div>
                <Text size="xs" weight="600" variant="primary">
                  {" "}
                  Total Affiliates
                </Text>{" "}
              </div>
              <div className="text-center">
                <div>
                  <Text variant="blue" size="md" weight="600">
                    250
                  </Text>
                </div>
                <Text size="xs" weight="600" variant="primary">
                  {" "}
                  Active Affiliates
                </Text>{" "}
              </div>
              <div className="text-center">
                <div>
                  <Text variant="blue" size="md" weight="600">
                    250
                  </Text>
                </div>
                <Text size="xs" weight="600" variant="primary">
                  {" "}
                  Pending Affiliates
                </Text>{" "}
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-span-2">
        <Card shadow="md" rounded="md">
          <div className=" h-40 space-y-1 p-2">
            <div className="flex justify-between bg-blue-50 p-1">
              <div>Users</div>
              <div className="">Last Login</div>
            </div>
            <div className="border-b-2 border-blue-100" />
            <div className="overflow-y-auto space-y-2 h-28 px-2 custom-scroll">
              <div className="flex justify-between ">
                <div>User A</div>
                <div>{new Date().toLocaleTimeString()}</div>
              </div>
              <div className="flex justify-between ">
                <div>User A</div>
                <div>{new Date().toLocaleTimeString()}</div>
              </div>
              <div className="flex justify-between ">
                <div>User A</div>
                <div>{new Date().toLocaleTimeString()}</div>
              </div>
              <div className="flex justify-between ">
                <div>User A</div>
                <div>{new Date().toLocaleTimeString()}</div>
              </div>
              <div className="flex justify-between ">
                <div>User A</div>
                <div>{new Date().toLocaleTimeString()}</div>
              </div>
              <div className="flex justify-between ">
                <div>User A</div>
                <div>{new Date().toLocaleTimeString()}</div>
              </div>
              <div className="flex justify-between ">
                <div>User A</div>
                <div>{new Date().toLocaleTimeString()}</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Stats;
