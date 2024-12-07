"use client";

import { Avatar, Card, Flex, Text, Title } from "@mantine/core";
import clsx from "clsx";
import { Heart, Message } from "iconsax-react";
import { Picture } from "../picture";

const post = {
  title:
    "UIMC Holds 30th Annual Ramadan Lecture, Discusses on the Excellence and Mediocrity of the Ummah",
  date: "Jan 1, 2023",
  description:
    "Through the five obligatory prayers and dhikr (remembrance of Allah), we can get closer to Allah SWT. Make sure that you pray sincerely and ...",
  author: "John Doe",
  readTime: 5,
  link: "#",
  likes: 120,
  comments: 45,
};

export function PostCard() {
  return (
    <Card
      shadow='lg'
      radius='lg'
      withBorder
      className={clsx(
        "font-jakarta cursor-pointer",
        "transition-all duration-300 hover:scale-105 hover:shadow-xl",
        "bg-gradient-to-br from-gray-50 via-white to-gray-100"
      )}
    >
      <Picture
        src='/images/placeholder.png'
        alt={post.title}
        height={150}
        objectFit='cover'
      />

      <Title
        order={4}
        mt='md'
        mb='xs'
        className='text-gray-800 font-semibold tracking-tight leading-tight'
        lineClamp={2}
      >
        {post.title}
      </Title>

      <Text size='sm' c='dimmed' lineClamp={2} className='text-gray-600'>
        {post.description}
      </Text>

      <Flex mt='lg'>
        <Flex gap='xs' align='center'>
          <Avatar size={32} radius='xl' />
          <Text size='sm' fw={600} className='text-gray-700'>
            By {post.author}
          </Text>
          <Text size='xs' c='dimmed' className='text-gray-500'>
            | {post.readTime} mins read
          </Text>
        </Flex>
      </Flex>

      <Flex gap='xs' mt='md' className='border-t pt-3 border-gray-2'>
        <Flex gap='xs'>
          <Heart size='18' color='#FF6F61' variant='Bold' />
          <Text size='sm' className='text-gray-600'>
            {post.likes}
          </Text>
        </Flex>

        <Flex gap='xs'>
          <Message size='18' color='#3A7AFE' variant='Outline' />
          <Text size='sm' className='text-gray-600'>
            {post.comments}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
