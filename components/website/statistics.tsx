"use client";

import { Flex, Stack, Text, Title } from "@mantine/core";
import { useInViewport } from "@mantine/hooks";
import CountUp from "react-countup";

export function Statistics() {
  const { ref, inViewport } = useInViewport();

  return (
    <Flex
      bg='accent.12'
      c='white'
      justify='center'
      className='gap-6 py-10  font-jakarta flex-col sm:flex-row'
    >
      <Stack
        align='center'
        justify='center'
        className='border-b sm:border-b-0 sm:border-r w-full text-center  pb-10 sm:pb-0'
        flex={1}
      >
        <Title order={2} fz={40} fw={700} className='font-sans' ref={ref}>
          <CountUp end={inViewport ? 1000 : 0} duration={3} /> +
        </Title>
        <Text>
          Coordinated <br className='hidden sm:inline' />
          students
        </Text>
      </Stack>

      <Stack
        align='center'
        justify='center'
        className='border-b sm:border-b-0 sm:border-r w-full text-center  pb-10 sm:pb-0'
        flex={1}
      >
        <Title order={2} fz={40} fw={700} className='font-sans ' ref={ref}>
          <CountUp end={inViewport ? 100 : 0} duration={3} /> +
        </Title>
        <Text>
          Tutored <br className='hidden sm:inline' />
          students
        </Text>
      </Stack>
      <Stack
        align='center'
        justify='center'
        className='w-full text-center'
        flex={1}
      >
        <Title order={2} fz={40} fw={700} className='font-sans' ref={ref}>
          <CountUp end={inViewport ? 10 : 0} duration={3} /> +
        </Title>
        <Text maw='min-content'>
          Active
          <br className='hidden sm:inline' />
          branches
        </Text>
      </Stack>
    </Flex>
  );
}
