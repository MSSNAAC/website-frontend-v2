import { Box, Button, Center, Flex, Stack, Text, Title } from "@mantine/core";

import { MSSNLogo } from "@/icons/mssn-logo";
import { MAX_SCREEN_WIDTH } from "@/packages/constants/size";
import { PAGES } from "@/packages/libraries";

import Link from "next/link";

export function About() {
  return (
    <Box component='section' bg='#E6F1E6' id='faqs' className=' px-6 py-16 '>
      <Flex
        align='center'
        justify='center'
        className='mx-auto flex w-full gap-4 font-jakarta flex-col lg:flex-row'
        maw={MAX_SCREEN_WIDTH}
        gap={24}
      >
        <Center component='figure' flex={1}>
          <MSSNLogo width='60%' height='60%' />
        </Center>

        <Stack gap={26} flex={1.5}>
          <Title order={2} fw={600} className='text-center text-4xl'>
            Who Are We?
          </Title>
          <Text fz={17} lh={1.5}>
            MSSN Akinyele Area Council, a part of the Oyo Area Unit, uniquely
            brings together both higher institutions and secondary school
            branches. Through active coordination and extramural classes, it
            fosters unity and brotherhood among its members. MSSNAAC also
            organizes various programs and events aimed at integrating spiritual
            growth, academic excellence, and self-development for all members.
          </Text>
          <Text fz={17} lh={1.5}>
            Through its well-structured coordination efforts and carefully
            designed extramural classes, MSSN Akinyele Area Council fosters a
            strong sense of unity and shared purpose among its members. These
            initiatives not only enhance academic performance but also nurture a
            deep sense of responsibility, moral uprightness, and communal
            support.
          </Text>
          <Button
            component={Link}
            href={PAGES.ABOUT}
            maw={200}
            mt={10}
            ml='auto'
          >
            Get to know more
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
