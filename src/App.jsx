import { useState } from "react";

import "./App.css";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";
import { CgAdd } from "react-icons/cg";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      title: "Home",
      description: "This is the main page of the website",
      subject: "Sample Subject",
      frequency:"Daily at",
      time:"10:00 AM"
    },
    {
      title: "About Us",
      description: "This page has details about the company",
      subject: "Sample Subject",
      frequency:"Daily at",
      time:"10:00 AM"
    },
    {
      title: "Pricing",
      description: "Prices for different subscriptions",
      subject: "Sample Subject",
      frequency:"Daily at",
      time:"10:00 AM"
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
      <div className="NavContainer">
        <div className="SearchInput">Search</div>
        <button onClick={() => setModalOpen(true)} className="btn">
         <CgAdd /> Add
        </button>
      </div>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
          rowToEdit={rowToEdit}
        />
      )}
    </div>
  );
}

export default App;
