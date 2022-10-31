import React from "react";
import Stack from "react-bootstrap/Stack";
import {
  LoginTitle,
  InputUserEmail,
  InputPassword,
  AccessAccount,
  CreateAccount,
} from "../atoms";
export default function LogInWrapper() {
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <LoginTitle />
      <InputUserEmail />
      <InputPassword />
      <AccessAccount />
      <CreateAccount />
    </Stack>
  );
}
