import React, { useState } from "react";
import {
  CModal,
  CButton,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
} from "@coreui/react";
import { useDispatch } from "react-redux";
import { deleteUser, editUser } from "../store/actions/userAction";


export default function ItemTable({ item }) {
  const dispatch = useDispatch();

  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);

  const [userInputEdit, setUserInputEdit] = useState({
    id: item.id,
    first_name: item.first_name,
    last_name: item.last_name,
    email: item.email,
    gender: item.gender,
  });

  const onChangeInputEdit = (e, key) => {
    const newObj = { ...userInputEdit };
    newObj[key] = e.target.value;
    setUserInputEdit(newObj);
  };


  const deleteUserHandle = () => {
    // console.log(item.id);
    dispatch(deleteUser(item.id))
    setDeleteUserModal(false)
  }

  const editUserHandle = () => {
    // console.log(userInputEdit);
    dispatch(editUser(userInputEdit))
    setEditUserModal(false);
  };

  return (
    <>
      {/* modal edit user data  */}
      <CModal
        alignment="center"
        scrollable
        visible={editUserModal}
        onClose={() => setEditUserModal(false)}
      >
        <CModalHeader>
          <CModalTitle>Edit User Data with ID: {item.id}</CModalTitle>
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
                onChange={(e) => onChangeInputEdit(e, "first_name")}
                value={userInputEdit.first_name}
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
                onChange={(e) => onChangeInputEdit(e, "last_name")}
                value={userInputEdit.last_name}
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
                onChange={(e) => onChangeInputEdit(e, "email")}
                value={userInputEdit.email}
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
                onChange={(e) => onChangeInputEdit(e, "gender")}
                value={userInputEdit.gender}
              >
                <option disabled>--Please Select--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Begender">Begender</option>
                <option value="Agender">Agender</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Genderfluid">Genderfluid</option>
                <option value="Polygender">Polygender</option>
                <option value="Genderqueer">Genderqueer</option>
              </select>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton
            className="text-white"
            color="secondary"
            onClick={() => setEditUserModal(false)}
          >
            Close
          </CButton>
          <CButton className="text-white" color="success" onClick={editUserHandle}>
            Create
          </CButton>
        </CModalFooter>
      </CModal>

      {/* delete modal  */}
      <CModal
        alignment="center"
        visible={deleteUserModal}
        onClose={() => setDeleteUserModal(false)}
      >
        <CModalHeader>
          <CModalTitle>Are you sure to delete User Data with ID: {item.id} ?</CModalTitle>
        </CModalHeader>
        
        <CModalFooter>
          <CButton className="text-white" color="secondary" onClick={() => setDeleteUserModal(false)}>
            Close
          </CButton>
          <CButton className="text-white" color="danger" onClick={deleteUserHandle}>Yes, Delete!</CButton>
        </CModalFooter>
      </CModal>

      <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          <span
            style={{ backgroundColor: "#0f9749" }}
            className="text-white lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase"
          >
            ID
          </span>
          {item.id}
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
          <span
            style={{ backgroundColor: "#0f9749" }}
            className="text-white lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase"
          >
            First Name
          </span>
          {item.first_name}
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
          <span
            style={{ backgroundColor: "#0f9749" }}
            className="text-white lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase"
          >
            Last Name
          </span>
          {item.last_name}
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
          <span
            style={{ backgroundColor: "#0f9749" }}
            className="text-white lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase"
          >
            Email
          </span>
          {item.email}
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
          <span
            style={{ backgroundColor: "#0f9749" }}
            className="text-white lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase"
          >
            Gender
          </span>
          {item.gender}
        </td>
        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
          <span
            style={{ backgroundColor: "#0f9749" }}
            className="text-white lg:hidden absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase"
          >
            Actions
          </span>
          <button className="mx-2 bg-gray-600 text-gray-100 p-1 hover:bg-gray-900 rounded" onClick={() => setEditUserModal(!editUserModal)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button className="mx-2 bg-red-600 text-gray-100 p-1 hover:bg-red-900 rounded" onClick={() => setDeleteUserModal(!deleteUserModal)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
}
