import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import alok from '../Component/alok.jpeg';

const EmployeeList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/user')
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setUser(json);
      }, []);
  });
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl text-indigo-400 py-12">
        JSON SERVER
      </h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-grey-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Employee
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
          </tr>
        </thead>
        {user.map((EmpData) => {
          return (
            <tbody className="bg-white divide-y divide-gray-200" id="tbody" key={EmpData.id}>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        src={EmpData.profile}
                        className="h-10 w-10 rounded-full"
                      ></img>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {EmpData.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {EmpData.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {EmpData.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{EmpData.role}</span>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default EmployeeList;
