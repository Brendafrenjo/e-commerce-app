import React, { useState } from "react";
import "./Products.css";

export default function Products() {
  const [data, setData] = useState(5);

  const state = {
    appTitle: "Customers",
    customersCount: data,
    customers: [
      {
        id: 1,
        name: "Bree",
        phone: "344-987",
        email: "breefree@gmail.com",
        address: { city: "Nairobi" },
      },
      {
        id: 2,
        name: "Lucy",
        phone: null,
        email: "lucyfree@gmail.com",
        address: { city: "Siaya" },
      },
      {
        id: 3,
        name: "Grace",
        phone: null,
        email: "gracefree@gmail.com",
        address: { city: "Kisumu" },
      },
      {
        id: 4,
        name: "Roman",
        phone: "121-563",
        email: "romanfree@gmail.com",
        address: { city: "Nakuru" },
      },
    ],
  };

  function handleRefresh(event) {
    console.log("Refresh clicked");
    event.preventDefault();
    setData(10);
  }

  return (
    <div className="Products">
      <h4>
        {state.appTitle}{" "}
        <span className="badge bg-success">{state.customersCount}</span>
        <button className="btn btn-success ms-2" onClick={handleRefresh}>
          Refresh
        </button>
      </h4>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {state.customers.map(function (customer, index) {
            return (
              <tr key={index}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>
                  {customer.phone ? (
                    customer.phone
                  ) : (
                    <div className="bg-warning">No Phone</div>
                  )}
                </td>
                <td>{customer.email}</td>
                <td>{customer.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
