import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, speciality, img, email } = doctor;
  const handleDelete = (email) => {
    fetch(`https://lit-wave-92560.herokuapp.com/doctors/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCout) {
          toast.success(`Doctor: ${name} is deleted`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <button
          onClick={() => handleDelete(email)}
          className="btn btn-xs btn-warning"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
