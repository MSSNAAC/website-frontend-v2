import { Box, Flex, Stack, Text, Title } from "@mantine/core";

import { MAX_SCREEN_WIDTH } from "@/packages/constants/size";

export function Mission() {
  return (
    <Box component='section' bg='#E6F1E6' id='faqs' className='px-6 py-24'>
      <Flex
        align='center'
        justify='center'
        className='mx-auto flex w-full gap-4 font-jakarta flex-col lg:flex-row'
        maw={MAX_SCREEN_WIDTH}
        gap={24}
      >
        <Stack gap={32} flex={1}>
          <Title order={2} fw={600} className='text-center text-4xl'>
            MSSN Vision
          </Title>
          <Text fz={17} lh={1.5}>
            To develop a righteous community of Muslims governed by the
            principles and rules of Shariah , with increasing generations within
            the fold of the Area Council and to co-exist with unity and
            brotherhood for the betterment of the Ummah.
          </Text>
        </Stack>
        <Stack gap={26} flex={1}>
          <Title order={2} fw={600} className='text-center text-4xl'>
            MSSN Mission
          </Title>
          <Text fz={17} lh={1.5}>
            MSSN Akinyele Area Council will, In Shaa ALlah, ensure the proper
            nurturing of her members through the various avenues at their
            disposal. This will give rise to a Society that is well-rounded in
            all aspects needed for human existence and sustenance.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}
