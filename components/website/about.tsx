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

        <Stack gap={24} flex={1}>
          <Title order={2} fw={700} className='pb-4 text-center text-3xl'>
            Who Are We?
          </Title>
          <Text fz={17}>
            MSSN AKINYELE AREA COUNCIL, one of the area councils under Oyo Area
            Unit is a unique blend of Higher Institution and Secondary school
            Branches.
          </Text>
          <Text fz={17}>
            MSSN Akinyele Area Council, ensures unity and fosters brotherhood
            through its active Coordination and Extramural classes.
          </Text>
          <Text fz={17}>
            MSSNAAC holds different programs and events to ensure an integration
            of the spiritual, academic and self-development realm of all members
            of the organization.
          </Text>
          <Button component={Link} href={PAGES.ABOUT} maw={200} mt={10}>
            Read More
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
