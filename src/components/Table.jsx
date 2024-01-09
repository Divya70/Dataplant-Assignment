import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";
import { useTime } from "../Context";

export const Table = ({ rows, deleteRow, editRow }) => {
  const {timeState}=useTime()
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th className="expand">Description</th>
            <th>Subject</th>
            <th>Schedule</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const subjectText =
              row.subject.charAt(0).toUpperCase() + row.subject.slice(1);

            return (
              <tr key={idx}>
                <td>{row.title}</td>
                <td className="expand">{row.description}</td>
                <td>
                  <span className={`label label-${row.subject}`}>
                    {subjectText}
                  </span>
                </td>
                {timeState?<td>
                  <span className={`label label-${row.frequency}`}>
                    {row.frequency} <span>{timeState}</span>
                  </span>
                </td>:<td>
                  <span className={`label label-${row.frequency}`}>
                    {row.frequency} <span>{row.time}</span>
                  </span>
                </td>}
                
                <td className="fit">
                  <span className="actions">
                  <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />              
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
