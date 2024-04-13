import React from "react";
import { UseAuth } from "../UseContext/Usecontextapi";
import { Link } from "react-router-dom";
import Header from "../Login/Header";

const AdminUsers = () => {
  const adminUsers = UseAuth();
  const { adminData, dataShow, handleDelete } = adminUsers;
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
            {adminData.map((eachadmin) => {
              return (
                <tr>
                  <td>{eachadmin.id}</td>
                  <td>{eachadmin.username}</td>
                  <td>{eachadmin.email}</td>
                  <td>{eachadmin.role}</td>

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
