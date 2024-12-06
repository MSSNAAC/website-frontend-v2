import { MAX_SCREEN_WIDTH } from "@/packages/constants/size";
import { Button, Stack, Text, Title } from "@mantine/core";

export function HeroSection() {
  return (
    <Stack
      align='center'
      ta='center'
      className='py-52'
      maw={MAX_SCREEN_WIDTH}
      mx='auto'
      gap={40}
      px={18}
    >
      <Title
        className='font-jakarta'
        order={2}
        fw={700}
        fz={{
          base: 32,
          sm: 40,
          xl: 60,
        }}
      >
        Developing A{" "}
        <span
          className='text-accent-9'
          style={{
            animation: "colorCycle 5s infinite",
          }}
        >
          Community Of Formidable Conscious Muslims
        </span>
        ,Living On The Right Path
      </Title>
      <Text
        fz={{
          base: 16,
          sm: 18,
        }}
        lh={1.5}
        maw={900}
        w='100%'
        className='font-sans'
      >
        Explore the world of Muslim students striving on the path to ensure
        better stance for future generations, building the Ummah in the best
        possible way, Insha Allah.
      </Text>
      <Button bg='accent.10' miw={200}>
        Donate now
      </Button>
    </Stack>
  );
}