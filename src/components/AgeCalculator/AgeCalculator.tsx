import React from "react";

const AgeCalculator = () => {
  return (
    <div>
      <div>
        <form action="">
          <div>
            <label htmlFor="">day</label>
            <input type="text" placeholder="DD" />
          </div>
          <div>
            <label htmlFor="">month</label>
            <input type="text" placeholder="MM" />
          </div>
          <div>
            <label htmlFor="">year</label>
            <input type="text" placeholder="YYYY" />
          </div>
        </form>
        <button></button>
      </div>
      <div>
        <p>
          <span></span>years
        </p>
        <p>
          <span></span>months
        </p>
        <p>
          <span></span>days
        </p>
      </div>
    </div>
  );
};

export default AgeCalculator;
