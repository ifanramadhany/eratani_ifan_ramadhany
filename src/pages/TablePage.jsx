import React, { useEffect, useState } from "react";
import { ItemTable } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  createNewUser,
  searchByFirstName,
  searchByLastName,
  searchByEmail,
  clearAllSearch,
} from "../store/actions/userAction";
import {
  CModal,
  CButton,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
} from "@coreui/react";
import { eratanilogo } from "../assets";
import { useHistory } from "react-router";

export default function TablePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [createUserModal, setCreateUserModal] = useState(false);
  const [searchData, setSearchData] = useState({
    search_first_name: "",
    search_last_name: "",
    search_email: "",
  });

  const toHomePage = () => history.push("/");

  const { users } = useSelector((state) => state.userState);

  const userSorting = users.sort((a, b) => b.id - a.id);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // console.log(users);

  const [userInputCreate, setUserInputCreate] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
  });

  const clearAllSearchData = () => {
    setSearchData({
      search_first_name: "",
      search_last_name: "",
      search_email: "",
    });
  }

  const clearUserInputCreate = () =>
    setUserInputCreate({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
    });

  const onChangeInputCreate = (e, key) => {
    const newObj = { ...userInputCreate };
    newObj[key] = e.target.value;
    newObj["id"] = users[0].id + 1;
    setUserInputCreate(newObj);
  };

  const onChangeSearchData = (e, key) => {
    const newObj = { ...searchData };
    newObj[key] = e.target.value;
    setSearchData(newObj);
  };

  const searchDataByFirstName = () => {
    // console.log(searchData.search_first_name);
    dispatch(searchByFirstName(searchData.search_first_name));
    setSearchData({
      search_first_name: searchData.search_first_name,
      search_last_name: "",
      search_email: "",
    });
  };

  const searchDataByLastName = () => {
    // console.log(searchData.search_last_name);
    dispatch(searchByLastName(searchData.search_last_name));
    setSearchData({
      search_first_name: "",
      search_last_name: searchData.search_last_name,
      search_email: "",
    });
  };

  const searchDataByEmail = () => {
    // console.log(searchData.search_email);
    dispatch(searchByEmail(searchData.search_email));
    setSearchData({
      search_first_name: "",
      search_last_name: "",
      search_email: searchData.search_email,
    });
  };

  const clearSearchHandle = () => {
    dispatch(clearAllSearch());
    clearAllSearchData()
  };

  const createUser = () => {
    // console.log(userInputCreate);
    dispatch(createNewUser(userInputCreate));
    clearUserInputCreate();
    setCreateUserModal(false);
    clearAllSearchData()
  };

  return (
    <>
      {/* modal create new user  */}
      <CModal
        alignment="center"
        scrollable
        visible={createUserModal}
        onClose={() => setCreateUserModal(false)}
      >
        <CModalHeader>
          <CModalTitle>Create New User</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <div className="w-full mb-4">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="first_name"
                type="text"
                placeholder="your first name.."
                onChange={(e) => onChangeInputCreate(e, "first_name")}
                value={userInputCreate.first_name}
              ></input>
            </div>

            <div className="w-full mb-4">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="last_name"
                type="text"
                placeholder="your last name.."
                onChange={(e) => onChangeInputCreate(e, "last_name")}
                value={userInputCreate.last_name}
              ></input>
            </div>

            <div className="w-full mb-4">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                id="email"
                type="email"
                placeholder="your email.."
                onChange={(e) => onChangeInputCreate(e, "email")}
                value={userInputCreate.email}
              ></input>
            </div>

            <div className="w-full mb-4">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Gender
              </label>
              <select
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                onChange={(e) => onChangeInputCreate(e, "gender")}
                value={userInputCreate.gender}
              >
                <option>--Please Select--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Begender">Begender</option>
                <option value="Non-binary">Non-binary</option>
              </select>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton
            className="text-white"
            color="secondary"
            onClick={() => setCreateUserModal(false)}
          >
            Close
          </CButton>
          <CButton className="text-white" color="success" onClick={createUser}>
            Create
          </CButton>
        </CModalFooter>
      </CModal>

      <div className="flex justify-center items-center">
        <div className="table-new">
          <div className="w-full h-12 flex justify-between items-center">
            <button
              className="button-detail h-9 text-sm px-8 font-medium flex justify-center items-center"
              onClick={clearSearchHandle}
            >
              Clear Search
            </button>

            <div className="cursor-pointer" onClick={toHomePage}>
              <img className="w-28" src={eratanilogo} alt="" />
            </div>

            <button
              className="button-mitra h-9 text-sm px-8 font-medium flex justify-center items-center"
              onClick={() => setCreateUserModal(!createUserModal)}
            >
              Create New Data
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <table className="border-collapse w-full">
            <thead className="table-head text-white">
              <tr>
                <th className="p-3 text-center font-bold uppercase border border-gray-300 hidden lg:table-cell">
                  ID
                </th>
                <th className="p-3 text-center font-bold uppercase border border-gray-300 hidden lg:table-cell">
                  First Name
                  <div className="flex items-center justify-center">
                    <div className="flex border-2 rounded">
                      <input
                        type="text"
                        className="px-2 py-0.5 w-32 text-gray-700"
                        placeholder="Search..."
                        onChange={(e) =>
                          onChangeSearchData(e, "search_first_name")
                        }
                        value={searchData.search_first_name}
                      ></input>
                      <button
                        className="flex items-center justify-center px-2 border-l"
                        onClick={searchDataByFirstName}
                      >
                        <svg
                          className="w-6 h-6 text-gray-300"
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
                <th className="p-3 text-center font-bold uppercase border border-gray-300 hidden lg:table-cell">
                  Last Name
                  <div className="flex items-center justify-center">
                    <div className="flex border-2 rounded">
                      <input
                        type="text"
                        className="px-2 py-0.5 w-32 text-gray-700"
                        placeholder="Search..."
                        onChange={(e) =>
                          onChangeSearchData(e, "search_last_name")
                        }
                        value={searchData.search_last_name}
                      ></input>
                      <button
                        className="flex items-center justify-center px-2 border-l"
                        onClick={searchDataByLastName}
                      >
                        <svg
                          className="w-6 h-6 text-gray-300"
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
                <th className="p-3 text-center font-bold uppercase border border-gray-300 hidden lg:table-cell">
                  Email
                  <div className="flex items-center justify-center">
                    <div className="flex border-2 rounded">
                      <input
                        type="text"
                        className="px-2 py-0.5 w-48 text-gray-700"
                        placeholder="Search..."
                        onChange={(e) => onChangeSearchData(e, "search_email")}
                        value={searchData.search_email}
                      ></input>
                      <button
                        className="flex items-center justify-center px-2 border-l"
                        onClick={searchDataByEmail}
                      >
                        <svg
                          className="w-6 h-6 text-gray-300"
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
                <th className="p-3 text-center font-bold uppercase border border-gray-300 hidden lg:table-cell">
                  Gender
                </th>
                <th className="p-3 text-center font-bold uppercase border border-gray-300 hidden lg:table-cell">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* item table  */}
              {userSorting.map((item) => (
                <ItemTable key={item.id} item={item} clearAllSearchData={clearAllSearchData}></ItemTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
