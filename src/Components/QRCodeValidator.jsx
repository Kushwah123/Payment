import React, { useState } from "react";
import QRCode from "qrcode.react";
import validator from "validator";

const QRCodeValidator = () => {
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    setCode(event.target.value);
    setIsValid(validator.isAlphanumeric(event.target.value));
  };

  return (
    <div>
      <label>Enter the code:</label>
      <input type="text" id="cash-input" value={code} onChange={handleInputChange} />
      {isValid && (
        <QRCode value={code} />
      )}
    </div>
  );
}

export default QRCodeValidator;