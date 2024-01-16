"use client";

import Card from "@/components/Card";
import React, { useEffect, useState } from "react";

const EmployeeTable = ({ employees }) => {
  return (
    <table className=" w-full  border-none border-gray-300  lg:text-sm">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b lg:px-2">Name</th>
          <th className="py-2 px-4 border-b lg:px-2">Email</th>
          <th className="py-2 px-4 border-b lg:px-2">Phone</th>
          <th className="py-2 px-4 border-b lg:px-2">Company</th>
          <th className="py-2 px-4 border-b lg:px-2">Service</th>
          <th className="py-2 px-4 border-b lg:px-2">Budget</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td className="py-2 px-4 border-b text-center lg:px-2">
              {employee.name}
            </td>
            <td className="py-2 px-4 border-b text-center lg:px-2">
              {employee.email}
            </td>
            <td className="py-2 px-4 border-b text-center lg:px-2">
              {employee.phone}
            </td>
            <td className="py-2 px-4 border-b text-center lg:px-2">
              {employee.company}
            </td>
            <td className="py-2 px-4 border-b text-center lg:px-2">
              {employee.service}
            </td>
            <td className="py-2 px-4 border-b text-center lg:px-2">
              {employee.budget}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchEmployees = async () => {
    const response = await fetch("http://localhost:5000/employees");
    const data = await response.json();

    console.log(data);

    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const filterEmployees = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return employees.filter(
      (employee) =>
        regex.test(employee.name) ||
        regex.test(employee.company) ||
        regex.test(employee.service)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterEmployees(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <main className="flex min-h-screen  flex-col items-center p-24 lg:p-0 ">
      <h1 className="text-xl font-bold">Employees List</h1>
      <div className="bg-white w-1/2 rounded-full my-4 border-[1px] shadow-lg py-2 px-2 self-center">
        <form>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            required
            placeholder="Search for a employee name, company or service"
            className="px-4 outline-none w-full"
          />
        </form>
      </div>
      <section className="my-5 lg:w-[90%]">
        <Card>
          {searchText ? (
            <EmployeeTable employees={searchedResults} />
          ) : (
            <EmployeeTable employees={employees} />
          )}
        </Card>
      </section>
    </main>
  );
};

export default EmployeesPage;
