import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputMask } from "primereact/inputmask";

export default function Login() {
  const [value, setValue] = useState(null);
  return (
    <div>
      <InputMask
        value={value}
        onChange={(e) => setValue(e.target.value)}
        mask="9999-9999-9999"
      />
    </div>
  );
}
