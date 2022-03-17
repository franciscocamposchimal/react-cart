import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ResumeItem from "../ResumeItem";

const Resume = ({ items, total, userMenu }) => {
  const [menus, setMenu] = useState(false);
  useEffect(() => {
    if (userMenu.length > 0) {
      console.log("LISt", userMenu);
      setMenu(true);
    }
  }, [userMenu]);
  return (
    <>
      {menus && (
        <div>
          <nav className="navbar navbar-dark bg-primary">
            {userMenu.map((item) => {
              console.log(item);
              return (
                <div key={item.id} className="navbar-brand">
                  {item.option}
                </div>
              );
            })}
          </nav>
        </div>
      )}

      <div className="resume">
        <div className="resumeAlign" style={{ width: "30%" }}>
          <div className="row ">
            <div className="col-4">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title">Resumen de compra</h5>
                  <small className="text-muted">
                    El monto total ya incluye IVA
                  </small>
                  <br />
                  <br />
                  <span className="h1">
                    ${total + Math.round(total * 0.16)}
                  </span>
                  /MXN
                  <br />
                  <br />
                  {items.map((item) => {
                    return <ResumeItem {...item} key={item.id} />;
                  })}
                  <br />
                  <br />
                  <br />
                  <div className="d-grid my-3">
                    <button className="btn btn-outline-dark btn-block">
                      Pagar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Resume.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  userMenu: PropTypes.array,
};

export default Resume;
