import React, { useEffect, useState } from "react";

// import { Container } from './styles';

import "./styles.css";

let usDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface MockDataProps {
  MockDataItem: MockDataItem[];
}

interface MockDataItem {
  transactionId: string;
  date: string;
  description: string;
  amount: number;
}

const Dashboard: React.FC = () => {
  let MockData = [
    {
      transactionId: "1",
      date: "2024-05-08T03:24:00",
      description: "name 1",
      amount: 5000,
    },
    {
      transactionId: "3",
      date: "2024-05-07T03:24:00",
      description: "name 3",
      amount: 2240,
    },
    {
      transactionId: "4",
      date: "2024-05-06T03:24:00",
      description: "name 4",
      amount: 1000,
    },
  ];
  const [mockData, setMockData] = useState([{}]);

  const handleDataByRange = (dataUsers: any) => {
    // const diaAtual = new Date();
    const diaAtual2 = new Date("2024-10-22T03:24:00");
    console.log("dataUsers", dataUsers);
    console.log(diaAtual2);
    const novaData = dataUsers.filter(
      (item: { date: any }) => item.date > diaAtual2
    );
    if (novaData.length > 0) {
      setMockData(novaData);
    }
    console.log("novaData", novaData);
  };

  useEffect(() => {
    if (MockData) {
      setMockData(MockData);
    }
  }, []);

  return (
    <div className="container-main-2">
      <div className="container-main-button">
        <button onClick={() => handleDataByRange(mockData)}>
          Fetch Users Data
        </button>
      </div>

      <div className="container-main">
        {mockData?.map((item: any, index: number) => (
          <div className="content-user-payment" key={index}>
            <p>Transaction Id: {item.transactionId}</p>
            <span>Amount: {usDollar.format(item.amount)}</span>
            <span>Description: {item.description}</span>
            <span>Date: {item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
