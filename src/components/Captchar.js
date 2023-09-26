import { Toast, Frame, Button, TextField, AppProvider } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
const Captchar = () => {
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  const [active, setActive] = useState(false);
  const [error, setError] = useState("");
  const toastMarkup = active ? (
    <Toast
      error={error === "Not Matched"}
      content={error}
      onDismiss={() => setActive((prevState) => !prevState)}
    />
  ) : null;

  var str1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var str2 = 8;
  var r1 = "";
  for (var i = 0; i < str2; i++) {
    var rnum = Math.floor(Math.random() * str1.length);
    r1 += str1.substring(rnum, rnum + 1);
  }
  useEffect(() => {
    setVal1(r1);
  }, []);
  let r2 = "";
  function cap() {
    for (var i = 0; i < str2; i++) {
      var rnum = Math.floor(Math.random() * str1.length);
      r2 += str1.substring(rnum, rnum + 1);
    }
    setVal1(r2);
    setVal2("");
  }

  function submit() {
    if (val1 === val2) {
      setVal2(val1);
      setError("Matched");
      setActive(true);
    } else {
      setError("Not Matched");
      setActive(true);
    }
  }
  return (
    <AppProvider>
      <Frame>
        <TextField label="Captcha" value={val1} autoComplete="off" />
        <Button primary onClick={() => cap()}>
          Refresh
        </Button>

        <TextField
          label="Re-Captcha"
          placeholder="Enter Re-Captcha"
          onChange={(e) => setVal2(e)}
          value={val2}
        />
        <Button primary onClick={submit}>
          Submit
        </Button>
        {toastMarkup}
      </Frame>
    </AppProvider>
  );
};
export default Captchar;
