"use client";

import { APP } from "@/packages/libraries";
import { Box, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { Form, useForm, yupResolver } from "@mantine/form";
import { getCookie } from "cookies-next";
import { toString } from "lodash";
import { boolean, object, string } from "yup";

const schema = object({
  email: string()
    .required("This is a required field")
    .email("Invalid email address"),
  password: string().required("This is a required field"),
  remember_me: boolean().notRequired(),
});

export default function Page() {
  const email = toString(getCookie(APP.EMAIL));

  const form = useForm({
    initialValues: {
      email,
      password: "",
    },
    validate: yupResolver(schema),
    validateInputOnBlur: true,
    transformValues: (values) => ({
      ...values,
      email: values.email.toLowerCase(),
    }),
  });

  function handleSubmit() {}

  return (
    <Stack gap={30} justify='stretch' flex={1}>
      <h2 className='font-medium text-2xl text-center'>
        Sign in to your account
      </h2>
      <Box component={Form} form={form} onSubmit={handleSubmit} w='100%'>
        <Stack gap={24}>
          <TextInput
            placeholder='user@mssnaac.org'
            label='Email Address'
            {...form.getInputProps("email")}
          />
          <PasswordInput
            placeholder='**********'
            styles={{
              label: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              },
            }}
            label='Password'
            type='password'
            {...form.getInputProps("password")}
          />
          <Button
            type='submit'
            mt={30}
            className='disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Proceed
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
