import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { UseAuth } from "../UseContext/Usecontextapi";

function Edit() {
  const { adminData, getRole,getApiData } = UseAuth();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigat = useNavigate();
  // console.log(data)
  console.log(adminData);
  function updateData(role) {
    // alert("am updated data")
    axios
      .get(`http://localhost:4000/${role}/` + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  // console.log(userData.role);
  // console.log(getRole.role);
  // console.log(data);

  useEffect(() => {
    // const eachRole=data.role.find(eachRole=>{return (eachRole.role)})
    updateData(getRole.role);
  }, []);
  function handleSubmit(event) {
    alert(getRole.role);
    // alert(role);

    event.preventDefault();
    axios.put(`http://localhost:4000/${getRole.role}/` + id, data).then((res) => {
      //  Swal("Product Created Successfully")
      // updateData(getRole.role);
      getApiData(getRole.role);

      Swal.fire({
        title: "Success",
        type: "success",
        text: "User Updated Successfully.",


      });

      navigat("/superadmin");
    });
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <form className="col-4 " onSubmit={ handleSubmit}>
        <div class="mb-3 ">
          <label htmlFor="id" class="form-label">
            ID
          </label>
          <input
            type="text"
            class="form-control"
            id="id"
            value={data.id}
            name="id"
            disabled
          />
        </div>
        <div class="mb-3 ">
          <label htmlFor="title" class="form-label">
            User Name
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            value={data.username}
            name="title"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="url" class="form-label">
            email
          </label>
          <input
            type="text"
            class="form-control"
            id="url"
            value={data.email}
            name="url"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="update" class="form-label">
            password
          </label>
          <input
            type="text"
            class="form-control"
            id="update"
            value={data.password}
            name="update"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="mb-4">

          <label htmlFor="role" className="label-control">Role</label>
          <input type="text" className="form-control" value={data.role} disabled />
          {/* <select
            value={data.role} */}
             {/* onChange={(e) => setData({ ...data, role: e.target.value })} */}
          
            {/* <option value=""> Select Role</option> */}

            {/* <option value="superadmin"> Super Admin</option>
            <option value="admin"> Admin</option>
            <option value="inventorystaff"> Inventory Staff</option>
            <option value="supplier"> supplier</option>
            <option value="viewer"> Viewer</option> */}
          {/* </select> */}
        </div>

        <button type="submit" class="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default Edit;
