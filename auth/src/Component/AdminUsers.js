import React from "react";
import { UseAuth } from "../UseContext/Usecontextapi";
import { Link } from "react-router-dom";
import Header from "../Login/Header";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye,faEyeLowVision,faSearch,} from "@fortawesome/free-solid-svg-icons";

const AdminUsers = () => {
  const adminUsers = UseAuth();
  const { adminData, dataShow, handleDelete } = adminUsers;
  const [passwordVisibility, setPasswordVisibility] = useState(
    Array(adminData.length).fill(false)
  );
  // ==============Visalble password Function=================================

  const togglePasswordVisibility = (index,) => {
 
 
      const updatedVisibility = [...passwordVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      setPasswordVisibility(updatedVisibility);

    
  };

  const handleUpdate = () => {};

  return (
    <div>
      {dataShow && (
        <table className="table border table-striped mt-2">
          <thead>
            <tr>
              <th>id </th>
              <th>Username </th>
              <th>email </th>
              <th>role </th>
              <th>Password</th>
              <th style={{marginLeft:"50px"}}>Actions</th>

            </tr>
          </thead>
          <tbody>
            
            {adminData.map((eachadmin,index) => {
  const showPassword = passwordVisibility[index]

              return (
                <tr>
                  <td>{eachadmin.id}</td>
                  <td>{eachadmin.username}</td>
                  <td>{eachadmin.email}</td>
                  <td>{eachadmin.role}</td>

                  <td  style={{ width: "150px"}}>
<tr className="row">
  <td className="col-7 "> {showPassword ? eachadmin.password : "****"}</td>
  <td className="col-2">

                       <button className="btn"
                          onClick={() => togglePasswordVisibility(index )}

                         
                          
                        >
                          
                          {showPassword ? (
                            <FontAwesomeIcon icon={faEye} />
                          ) : (
                            <FontAwesomeIcon icon={faEyeLowVision} />
                          )}
                        </button></td>
</tr>

                       
                        </td>




                  <td>
                    {
                      <Link to={`/updateuser/${eachadmin.id}`}>
                        
                        <button
                          className="btn btn-success mx-2"
                          // onClick={() =>
                          //   handleUpdate()
                          // }
                        >
                          Edit
                        </button>
                      </Link>
                    }
                    <button
                      className="btn btn-danger "
                      onClick={() => handleDelete(eachadmin.id, eachadmin.role)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminUsers;
