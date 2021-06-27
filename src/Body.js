import React, { useEffect, useState } from "react";
import Modalpage from "./Modalpage";

export default function body() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="body text-center m-5">
      <div className="container">
        <div className="row">
          {users.map((curElement) => {
            return (
              <div className="col-lg-4">
                <div className="card mb-4 p-0 text-left">
                  <div className="card-body">
                    <h4>User ID : {curElement.userId}</h4>
                    <h6>Sub ID : {curElement.id}</h6>
                    <h6 className="card-title">{curElement.title}</h6>
                    {/* <p className="card-text">{curElement.body}</p> */}
                    {/* <button onClick={() => setisOpen(true)} className="btn btn-info">More Details...</button> */}
                    <Modalpage
                      userid={curElement.userId}
                      subid={curElement.id}
                      title={curElement.title}
                      body={curElement.body}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
