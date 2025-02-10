import { MAX_SCREEN_WIDTH } from "@/packages/constants/size";
import { Box, Button, Stack, Title } from "@mantine/core";
import { PostCard } from "../../shared/interface/cards/blog";

export function AlFaedah() {
  return (
    <Stack py={64} px={18} bg='white' justify='center' align='center'>
      <Title order={2} c='accent.11' fw={600} className='text-center text-4xl'>
        Al-Faedah Press
      </Title>
      <p className='text-center font-jakarta'>
        Access more beneficial knowledge that are priceless but free.
      </p>
      <Box
        className='grid gap-6 py-8 w-full'
        maw={MAX_SCREEN_WIDTH}
        mx='auto'
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(350px, 100%), 1fr))",
          gridAutoRows: "1fr",
        }}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <PostCard key={index} />
        ))}
      </Box>
      <Button miw={200}>Vist Blog</Button>
    </Stack>
  );
}
