import React, { useState } from "react";
import { Button } from "./Button";
import { AlertConfirm } from "./AlertConfirm";

export const ConfirmButton = () => {
  const [showAlert, setShowAlert] = useState(false);

  const getAlert = () => {
    setShowAlert(true);
  };

  return (
    <>
      {showAlert && <AlertConfirm />}
      {!showAlert && (
        <div className="alignCenter">
          <Button onClick={getAlert} text={"Confirm all selected items!"} />
        </div>
      )}
    </>
  );
};
