"use client";

import clsx from "clsx";

import { Accordion, Box, Stack, Text, Title } from "@mantine/core";

import { MAX_SCREEN_WIDTH } from "@/packages/constants/size";
import { Add } from "iconsax-react";
import { useState } from "react";

const data = [
  {
    _id: "1",
    question: "What is the purpose of the society?",
    answer:
      "The purpose of the society is to provide a platform for students to learn and grow in the field of computer science.",
  },
  {
    _id: "2",
    question: "How can I join the society?",
    answer:
      "You can join the society by attending our weekly meetings and participating in our events.",
  },
  {
    _id: "3",
    question: "What are the benefits of joining the society?",
    answer:
      "The benefits of joining the society include networking opportunities, access to resources, and the chance to work on projects.",
  },
  {
    _id: "4",
    question: "How can I get involved in the society?",
    answer:
      "You can get involved in the society by joining a committee, attending events, and participating in projects.",
  },
  {
    _id: "5",
    question: "How can I contact the society?",
    answer: "You can contact the society by sending an email",
  },
];

export function Faqs() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Box component='section' bg='#E6F1E6' id='faqs' className=' px-6 py-16 '>
      <Stack
        align='center'
        className='mx-auto flex w-full gap-4 font-jakarta'
        maw={MAX_SCREEN_WIDTH}
      >
        <div className='mb-6 w-fit'>
          <Title
            order={2}
            c='accent.11'
            fw={700}
            className='pb-4 text-center text-3xl'
          >
            FAQs
          </Title>
          <p className='text-center'>
            Find answers to commonly asked questions about our society.
          </p>
        </div>

        <Accordion
          value={value}
          onChange={setValue}
          classNames={{
            item: "rounded-xl py-5",
            root: "w-full gap-2 flex flex-col",
            chevron: clsx(
              "bg-accent-11 rounded-full text-white ",
              "w-8 h-8 flex items-center justify-center"
            ),
            content: "!p-0 max-w-[860px]",
            panel: "rounded-xl p-5 font-jakarta",
            control: "bg-transparent",
          }}
          styles={{
            item: {
              background: "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(9px)",
            },
          }}
          chevron={
            <Add size={21} fontWeight={800} color='white' variant='TwoTone' />
          }
        >
          {data.map((faq) => (
            <Accordion.Item key={faq._id} value={faq.question}>
              <Accordion.Control>
                <Title
                  order={3}
                  fw={600}
                  className={clsx(
                    "line-clamp-1 text-base sm:line-clamp-none sm:w-full font-sans",
                    { "line-clamp-none": value === faq.question }
                  )}
                >
                  {faq.question}
                </Title>
              </Accordion.Control>
              <Accordion.Panel component={Box}>
                <Text component='article' fz={15} fw={400}>
                  {faq.answer}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    </Box>
  );
}
