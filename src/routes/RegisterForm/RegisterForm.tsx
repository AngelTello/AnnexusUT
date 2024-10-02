import { Button, Stack, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
}

interface IFormInput {
  firstName: string;
  lastName: string;
  eMail: string;
  age: number;
}

const RegisterForm = () => {
  // Toast logic handlers starts here
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const openToast = (newState: SnackbarOrigin) =>
    setState({ ...newState, open: true });

  const handleClose = () => setState({ ...state, open: false });
  // Toast logic handlers ends here

  const { register, handleSubmit, formState } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = () => {
    openToast({ vertical: "bottom", horizontal: "right" });
  };

  return (
    <>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            fullWidth
            required
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            fullWidth
            required
            {...register("lastName", { required: true, maxLength: 20 })}
          />
        </Stack>
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          fullWidth
          required
          sx={{ mb: 4 }}
          {...register("eMail", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Age"
          fullWidth
          required
          sx={{ mb: 4 }}
          {...register("age", { required: true, min: 18, max: 99 })}
        />
        <Button
          variant="outlined"
          color="secondary"
          type="submit"
          disabled={!formState.isValid}
        >
          Register
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Form submitted!"
        key={vertical + horizontal}
      />
    </>
  );
};

export default RegisterForm;
