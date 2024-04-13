import React, { createContext, useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UpdateUser from "../Login/UpdateUser";
import Swal from "sweetalert";
import { Formik } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "axios";
import swal from "sweetalert";
// import AdminUsers from "../Component/AdminUsers";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
  });

  const [adminData, setAdmindata] = useState([]);
  const [show, setshow] = useState(false);
  const [dataShow, setDataShow] = useState(true);
  const [loginUser, setLoginUser] = useState([]);
  const [userRole, setUserRole] = useState(""); // Changed to setUserRole
  const [userFormData, setuserFormData] = useState([]);
  console.log(userFormData);
  const resetForm = () => {
    setUserData({
      username: "",
      password: "",
      email: "",
      role: "",
    });
  };
  console.log(userData);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("hi");

    switch (userData.role) {
      // navigates to admin data
      case `${userData.role}`:
        axios
          .post(`http://localhost:4000/${userData.role}`, userData)
          .then((response) => {
            setuserFormData(response.data);

            swal("Success", `Data added to ${userData.role}`, "success");
            // setUserData({
            //   username: "",
            //   password: "",
            //   email: "",
            //   role: "",
            // });
            resetForm();
            // <AdminUsers/>
            setshow(false);
            setDataShow(true);
            getApiData(getRole.role);
          })
          .catch((error) => {
            // console.error("Error submitting data to admin:", error);
            alert(
              `An error occurred while submitting data to ${userData.role}. Please try again later.`
            );
          });
        break;
      // case "inventorystaff":
      // axios
      //   .post("http://localhost:4000/inventorystaff", userData)
      //   .then((response) => {
      //     alert("data submitted to inventory staff");
      //     resetForm();
      //   })
      //   .catch((error) => {
      //     console.error("Error submitting data to inventorystaff:", error);
      //     alert(
      //       "An error occurred while submitting data to inventorystaff. Please try again later."
      //     );
      //   });
      // break;
      // case "viewer":
      // axios
      //   .post("http://localhost:4000/viewer", userData)
      //   .then((response) => {
      //     alert("data submitted to viewer");
      //     resetForm();
      //   })
      //   .catch((error) => {
      //     console.error("Error submitting data to viewer:", error);
      //     alert(
      //       "An error occurred while submitting data to viewer. Please try again later."
      //     );
      //   });
      // break;
      // // case "supplier":
      // axios
      //   .post("http://localhost:4000/supplier", userData)
      //   .then((response) => {
      //     alert("data submitted to supplier");
      //     resetForm();
      //   })
      //   .catch((error) => {
      //     console.error("Error submitting data to supplier:", error);
      //     alert(
      //       "An error occurred while submitting data to supplier. Please try again later."
      //     );
      //   });
      // break;
      default:
        alert("not a valid role");
        break;
    }
  };
  const [getRole, setgetRole] = useState({
    role: "superadmin",
  });

  console.log(getRole);

  const getApiData = (role) => {
    axios.get(`http://localhost:4000/${role}`).then((response) => {
      setAdmindata(response.data);
    });
  };
  useEffect(() => {
    getApiData(getRole.role);
  }, [getRole.role]);
  console.log(userFormData);
  const handleDelete = (id, role) => {
    // Use SweetAlert for confirmation
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // Make a DELETE request to your server
        axios
          .delete(`http://localhost:4000/${role}/${id}`)
          .then((response) => {
            if (response.status === 200) {
              swal("Poof! Your item has been deleted!", {
                icon: "success",
              }).then(() => {
                // Update the inventory in your context or state
                setAdmindata(adminData.filter((item) => item.id !== id));
              });
            } else {
              swal("Error!", "Failed to delete item.", "error");
            }
          })
          .catch((error) => {
            swal("Error!", "Failed to delete item.", "error");
            console.error(error);
          });
      } else {
        swal("Cancelled", "Your item is safe :)", "error");
      }
    });
  };

  return (
    <userContext.Provider
      value={{
        userData,
        setUserData,
        handleSubmit,
        adminData,
        show,
        setshow,
        setDataShow,
        dataShow,
        handleDelete,
        userFormData,
        loginUser,
        setLoginUser,
        userRole,
        setUserRole,
        getRole,
        setgetRole,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export const UseAuth = () => {
  return useContext(userContext);
};
