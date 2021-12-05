import React from "react";
import { ItemTable } from "../components";


export default function TablePage() {
  return (
    <div className="flex justify-center items-center">
      <div className="table-new">
        <div className="w-full h-12 flex justify-between items-center">
          <button className="button-detail h-9 text-sm px-8 font-medium flex justify-center items-center">
            Clear Search
            
          </button>
          <button className="button-mitra h-9 text-sm px-8 font-medium flex justify-center items-center">
            Create New Data
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <table class="border-collapse w-full">
          <thead className="table-head text-white">
            <tr>
              <th class="p-3 text-center font-bold uppercase border border-gray-300 hidden lg:table-cell">
                ID
              </th>
              <th class="p-3 text-center font-bold uppercase border border-gray-300 hidden lg:table-cell">
                First Name
                <div class="flex items-center justify-center">
                  <div class="flex border-2 rounded">
                    <input
                      type="text"
                      class="px-2 py-0.5 w-32"
                      placeholder="Search..."
                    ></input>
                    <button class="flex items-center justify-center px-2 border-l">
                      <svg
                        class="w-6 h-6 text-gray-300"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </th>
              <th class="p-3 text-center font-bold uppercase border border-gray-300 hidden lg:table-cell">
                Last Name
                <div class="flex items-center justify-center">
                  <div class="flex border-2 rounded">
                    <input
                      type="text"
                      class="px-2 py-0.5 w-32"
                      placeholder="Search..."
                    ></input>
                    <button class="flex items-center justify-center px-2 border-l">
                      <svg
                        class="w-6 h-6 text-gray-300"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </th>
              <th class="p-3 text-center font-bold uppercase border border-gray-300 hidden lg:table-cell">
                Email
                <div class="flex items-center justify-center">
                  <div class="flex border-2 rounded">
                    <input
                      type="text"
                      class="px-2 py-0.5 w-48"
                      placeholder="Search..."
                    ></input>
                    <button class="flex items-center justify-center px-2 border-l">
                      <svg
                        class="w-6 h-6 text-gray-300"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </th>
              <th class="p-3 text-center font-bold uppercase border border-gray-300 hidden lg:table-cell">
                Gender
              </th>
              <th class="p-3 text-center font-bold uppercase border border-gray-300 hidden lg:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* item table  */}
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
            <ItemTable></ItemTable>
          </tbody>
        </table>
      </div>
    </div>
  );
}
