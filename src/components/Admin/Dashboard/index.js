import React from "react";
import "./dashboard.scss";
function Dashboard(props) {
  return (
    <section className="dashboard container">
      <div className="card">
        <div className="card__heading">
          <h3 className="card__title">Target</h3>
        </div>
        <div className="card__body">Đây là body</div>
        <div className="card__footer">Footer</div>
      </div>
      <div className="card">
        <div className="card__heading">
          <h3 className="card__title">Target</h3>
        </div>
        <div className="card__body">Đây là body</div>
        <div className="card__footer">Footer</div>
      </div>
      <div className="card">
        <div className="card__heading">
          <h3 className="card__title">Target</h3>
        </div>
        <div className="card__body">Đây là body</div>
        <div className="card__footer">Footer</div>
      </div>
    </section>
  );
}

export default Dashboard;
