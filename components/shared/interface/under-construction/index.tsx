import { Button, Stack, Title } from "@mantine/core";
import Link from "next/link";

export function UnderConstruction() {
  return (
    <Stack
      component='section'
      className='bg-[#daf2da] font-jakarta'
      align='center'
      justify='center'
    >
      <section className='grid place-items-center px-6 py-20 lg:px-8 '>
        <div className='text-center'>
          <Title
            fw={500}
            component='h2'
            className='text-3xl tracking-tight sm:text-5xl font-jakarta'
          >
            Page Under Construction
          </Title>
          <p className='mt-6 text-base leading-7'>
            Sorry, This page is currently under maintenance, check back later.
            You will find lots to <br className='hidden sm:block' />
            explore on the home page.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Button component={Link} href='/'>
              Go back home
            </Button>
          </div>
          <div
            style={{
              alignItems: "flex-end",
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <span
              style={{
                borderLeft: "4px solid #007300",
                fontSize: "1.4rem",
                letterSpacing: "0.1em",
                lineHeight: "2.2em",
                padding: "0 2vw",
              }}
              className='text-primary-500'
            >
              Code: <strong>COMR-204</strong>
            </span>
          </div>
        </div>
      </section>
    </Stack>
  );
}
