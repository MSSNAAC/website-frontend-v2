"use client";

import { MAX_SCREEN_WIDTH } from "@/packages/constants/size";
import { Box, Button, Stack, Text, Title } from "@mantine/core";

import clsx from "clsx";
import { Picture } from "../shared/interface/picture";

export function Projects() {
  return (
    <Stack
      py={64}
      px={18}
      bg='white'
      justify='center'
      align='center'
      className='font-jakarta'
    >
      <Title
        order={2}
        c='accent.11'
        fw={700}
        className='text-center text-3xl font-sans'
      >
        Our Projects
      </Title>
      <p className='text-center'>
        Explore our past and current projects, including events, initiatives,
        and collaborations, and learn more about our mission and impact.
      </p>
      <Box
        className='grid gap-10 py-8 w-full'
        maw={MAX_SCREEN_WIDTH}
        mx='auto'
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
          gridAutoRows: "1fr",
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <Stack
            bg='accent.1'
            key={index}
            gap={0}
            className={clsx(
              "cursor-pointer group overflow-hidden relative ",
              "transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-5px] rounded-md"
            )}
          >
            <Picture
              src='/images/globe.png'
              alt='Project Image'
              height={250}
              objectFit='cover'
              className='group-hover:scale-110 transition-transform duration-300 ease-in-out'
            />

            <Text
              ta='center'
              className='my-6 font-medium text-gray-700 group-hover:text-primary transition-colors duration-300'
            >
              Extramural
            </Text>
          </Stack>
        ))}
      </Box>
      <Button miw={200}>View All Projects</Button>
    </Stack>
  );
}
