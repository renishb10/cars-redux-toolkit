import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => state.form);

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    dispatch(changeCost(parseInt(e.target.value)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label htmlFor="cost" className="label">
              Cost
            </label>
            <input
              name="cost"
              type="number"
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
