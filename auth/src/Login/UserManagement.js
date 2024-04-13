import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import { UseAuth } from "../UseContext/Usecontextapi";
import AdminUsers from "../Component/AdminUsers";

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

  const handleRoles = (e) => {
    setgetRole({ getRole, role: e.target.value });
  };

  const validateForm = () => {
    const errors = {};

    if (!userData.username || userData.username.trim() === "") {
      errors.username = "Username is required";
    } else if (userData.username.length > 40) {
      errors.username = "Max Length is 40 Characters";
    }

    if (!userData.email || userData.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!isValidEmail(userData.email)) {
      errors.email = "Invalid email";
    }

    if (!userData.password || userData.password.trim() === "") {
      errors.password = "Password is required";
    }

    if (!userData.role || userData.role.trim() === "") {
      errors.role = "Role is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };
// console.log(email)
  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Header />

      <div className="user-container w-100">
        <h1 className="userheader">User Management Page</h1>
        <div className="d-flex justify-content-between m-3">
          <button className="btn btn-primary " onClick={handleShow}>
            Add User
          </button>
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
          <form onSubmit={validateForm}>
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
                required
                maxLength={40}
                minLength={5}
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
                required
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
                    password: e.target.value.toLowerCase(),
                  })
                }
                required
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
                required
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
            <button type="submit" className=" btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default UserManagement;
