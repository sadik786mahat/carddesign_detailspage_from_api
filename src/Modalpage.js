import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./styles.scss";

const AppModal = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  const prodimg = "https://picsum.photos/200/300";

  return (
    <div className="Modal">
      <button onClick={() => setModalIsOpen(true)} className="btn btn-info">
        More Details...
      </button>

      <Modal isOpen={modalIsOpen}>
        <h2>Product Details Page</h2>
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <img src={prodimg} alt="Product image" />
          </div>
          <div className="col-sm-6">
            <h4>User ID : {props.userid}</h4>
            <h6>Sub ID : {props.subid}</h6>
            <h6 className="card-title">Product Title : {props.title}</h6>
            <p className="card-text">
              <strong>Product Description :</strong> {props.body}
            </p>
          </div>
        </div>

        <hr />
        <div className="text-center">
          <button
            onClick={() => setModalIsOpen(false)}
            className="btn btn-info close_modal"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AppModal;
