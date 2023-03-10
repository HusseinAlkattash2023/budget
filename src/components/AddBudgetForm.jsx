import React from "react";
import { Form } from "react-router-dom";

import { HiCurrencyDollar } from "react-icons/hi2";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create budget</h2>
      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Budget Name</label>
          <input
            type="number"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., $350"
            required
            inputMode="decimal"
          />
        </div>
        <button type="submit" className="btn btn--dark">
            <span>Create Budget</span>
            <HiCurrencyDollar/>
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
