import { Box, Button, Center, Flex, Stack, Text, Title } from "@mantine/core";

import { MSSNLogo } from "@/icons/mssn-logo";
import { MAX_SCREEN_WIDTH } from "@/packages/constants/size";
import { PAGES } from "@/packages/libraries";

import Link from "next/link";

export function Donate() {
  return (
    <Box component='section' bg='#E6F1E6' id='donate' className=' px-6 py-16 '>
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
            Spend in the cause of Allah
          </Title>
          <Text fz={17}>
            You want to give charity, but don't know how? Or you have not found
            the right target?
          </Text>
          <Text fz={17}>
            Sow a seed for your akhirah and donate to the cause of Allah.
            MSSNAAC is open to donations that help in the smooth and effective
            running of our Projects, Students Welfare, events among others.
          </Text>
          <Text fz={17}>
            Your generosity will go a long way in ensuring the effective
            coordination, effective planning and implementation and the
            effective running of activities within the Area Council.
          </Text>
          <Button component={Link} href={PAGES.ABOUT} maw={200} mt={10}>
            Donate
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
