import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import { UseAuth } from "../UseContext/Usecontextapi";
import AdminUsers from "../Component/AdminUsers";
import Navbar from "../Navbar/Navbar";
import CommonNavbar from "../Navbar/CommonNavbar";

function UserManagement() {
  const userInfo = UseAuth();
  const {
    userData,
    setUserData,
    handleSubmit,
    show,
    setshow,
    setDataShow,
    getRole,
    setgetRole,
  } = userInfo;

  const [errors, setErrors] = useState({});

  const handleShow = () => {
    setshow(true);
    setDataShow(false);
  };

  const handleRoles = (event) => {
    setgetRole({ getRole, role: event.target.value });
  };

  const validateForm = () => {
    const errorMessages = {
      username: {
        required: "Username is required",
        minLength: "Username must be at least 4 characters long",
      },
      password: {
        required: "Password is required",
        minLength: "Password must be at least 8 characters long",
      },
      email: {
        required: "Email is required",
        invalid: "Invalid email",
      },
      role: {
        required: "Role is required",
      },
    };

    const errors = {};

    if (!userData.username || userData.username.trim() === "") {
      errors.username = errorMessages.username.required;
    } else if (userData.username.length < 4) {
      errors.username = errorMessages.username.minLength;
    }

    if (!userData.password || userData.password.trim() === "") {
      errors.password = errorMessages.password.required;
    } else if (userData.password.length < 8) {
      errors.password = errorMessages.password.minLength;
    }

    if (!isValidEmail(userData.email)) {
      errors.email = errorMessages.email.invalid;
    } else if (!userData.email || userData.email.trim() === "") {
      errors.email = errorMessages.email.required;
    }

    if (!userData.role || userData.role.trim() === "") {
      errors.role = errorMessages.role.required;
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (validateForm()) {
      handleSubmit(event); // Pass userData to handleSubmit function
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  return (
    <>
      <Header />
      <Navbar
        home="/"
        userTitle="User Management"
        inventoryTitle="Inventory Management"
        supplierTitle="Supplier Management"
        orderTitle="Order Management"
        viewerTitle="Viewer"
      />
      <CommonNavbar />

      <div className="user-container w-100">
        <h1 className="userheader">User Management Page</h1>
        <div className="d-flex justify-content-between m-3">
          {getRole.role === "superadmin" ? (
            ""
          ) : (
            <button className="btn btn-primary " onClick={handleShow}>
              Add User
            </button>
          )}

          <select onChange={handleRoles}>
            <option value="superadmin">Super Admin</option>
            <option value="admin">Admin</option>
            <option value="inventorystaff">Inventory Staff</option>
            <option value="supplier">Supplier</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>

        <AdminUsers />

        {show && (
          <form onSubmit={handleSubmitForm}>
            <div className="p-2 col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="username" className="form-label">
                User Name <span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={userData.username}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    username: e.target.value.toLowerCase(),
                  })
                }
              />
              {errors.username && (
                <span className="text-danger">{errors.username}</span>
              )}
            </div>
            <div className="p-2 col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="email" className="form-label">
                Email <span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    email: e.target.value.toLowerCase(),
                  })
                }
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="p-2 col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="password" className="form-label">
                Password <span>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    password: e.target.value,
                  })
                }
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <div className="p-2 col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="role" className="form-label">
                Role <span>*</span>
              </label>
              <select
                className="form-control"
                id="role"
                name="role"
                value={userData.role}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    role: e.target.value.toLowerCase(),
                  })
                }
              >
                <option value="">Select Role</option>
                <option value="superadmin">Super Admin</option>
                <option value="admin">Admin</option>
                <option value="inventorystaff">Inventory Staff</option>
                <option value="supplier">Supplier</option>
                <option value="viewer">Viewer</option>
              </select>
              {errors.role && (
                <span className="text-danger">{errors.role}</span>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default UserManagement;
