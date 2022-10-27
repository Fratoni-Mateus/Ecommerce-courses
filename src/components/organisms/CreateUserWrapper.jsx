import React from "react";
import Stack from "react-bootstrap/Stack";
import {
  CreateAccount,
  CreateUserTitle,
  InputPassword,
  InputRepeatPassword,
  InputUserEmail,
} from "../atoms/";

export default function CreateUserWrapper() {
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <CreateUserTitle />
      <InputUserEmail />
      <InputPassword />
      <InputRepeatPassword />
      <CreateAccount />
    </Stack>
  );
}
