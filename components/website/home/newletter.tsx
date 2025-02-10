"use client";

import { Envelope } from "@/icons/envelope";
import { PaperPlane } from "@/icons/paper-plane";
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { object, string } from "yup";

const schema = object({
  email: string().email("Please enter a valid email address"),
});

export function Newsletter() {
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: yupResolver(schema),
    validateInputOnBlur: true,
  });

  return (
    <Stack
      component='section'
      px={18}
      className='font-jakarta'
      style={{
        position: "relative",
        backgroundImage: `url("/images/black-stripe.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />
      <Flex
        component='section'
        direction='column'
        ta='center'
        align='center'
        justify='center'
        c='white'
        gap={30}
        mih={500}
        style={{ zIndex: 2 }}
      >
        <Title
          order={2}
          className='prose-3xl/bold sm:prose-5xl/bold font-sans space-x-4'
          // style={{ letterSpacing: "0.1em" }}
        >
          <span>MSSNAAC</span> <span>NEWSLETTER</span>
        </Title>

        <Text lh={1.5} maw={950}>
          Be the first to receive the updates of the quarterly happenings in the
          Area Council. Sign up here.
        </Text>

        <TextInput
          mt={10}
          required
          {...form.getInputProps("email")}
          placeholder='example@mssnaac.org'
          classNames={{
            input: "rounded-full bg-white border-accent-9 px-[90px]",
            root: "w-full max-w-[500px] overflow-hidden",
            section: "w-fit",
          }}
          leftSection={
            <Button variant='light' className='rounded-l-full'>
              <Envelope width={20} />
            </Button>
          }
          rightSection={
            <Button className='rounded-r-full'>
              <PaperPlane width={24} />
            </Button>
          }
        />
      </Flex>
    </Stack>
  );
}
