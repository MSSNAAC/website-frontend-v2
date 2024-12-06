import clsx from "clsx";
import Link from "next/link";

import { Box, Center, Divider, Flex, Stack, Text } from "@mantine/core";
import { FOOTER_LINKS } from "./links";

import { FacebookIcon } from "@/icons/facebook";
import { InstagramIcon } from "@/icons/instagram";
import { LinkedinIcon } from "@/icons/linkedin";
import { MSSNLogo } from "@/icons/mssn-logo";
import { TwitterIcon } from "@/icons/twitter";
import { MAX_SCREEN_WIDTH } from "@/packages/constants/size";

export function WebsiteFooter() {
  return (
    <Stack
      mt="auto"
      bg="accent.12"
      c="white"
      component="footer"
      className="font-jakarta text-primary-text-body"
    >
      <Stack
        w="100%"
        maw={MAX_SCREEN_WIDTH}
        mx="auto"
        fz={14}
        className="lg:pt-16 pt-12 px-5 justify-evenly"
      >
        <div
          className={clsx(
            "flex flex-wrap gap-12 sm:gap-8",
            "clump:gap-x-[clamp(20px,9vw,172px)] xl:clump:gap-x-[clamp(20px,6vw,172px)] ",
            "flex-col justify-start md:flex-row xl:justify-between",
          )}
          style={{
            rowGap: 40,
            columnGap: 50,
          }}
        >
          <Stack
            align="center"
            gap={20}
            className="flex-1 items-center lg:items-start"
          >
            <Box
              px={18}
              py={8}
              bg="white"
              component="figure"
              className="rounded-2xl w-fit"
            >
              <MSSNLogo />
            </Box>
            <Text fz={15} ta="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero,
              condimentum ante diam etiam cursus lacus arcu.
            </Text>
            <div className="flex items-center gap-2">
              <Box
                component={Link}
                target="_blank"
                className="flex items-center justify-center rounded-full"
                bg="white"
                h={50}
                w={50}
                href="#"
              >
                <FacebookIcon />
              </Box>
              <Box
                component={Link}
                target="_blank"
                className="flex items-center justify-center rounded-full"
                bg="white"
                h={50}
                w={50}
                href="#"
              >
                <TwitterIcon />
              </Box>
              <Box
                component={Link}
                target="_blank"
                className="flex items-center justify-center rounded-full"
                bg="white"
                h={50}
                w={50}
                href="#"
              >
                <LinkedinIcon />
              </Box>
              <Box
                component={Link}
                target="_blank"
                className="flex items-center justify-center rounded-full"
                bg="white"
                h={50}
                w={50}
                href="#"
              >
                <InstagramIcon />
              </Box>
            </div>
          </Stack>

          <Flex
            className={clsx(
              "flex md:flex-row basis-full lg:basis-0 flex-[2] gap-10",
            )}
          >
            {FOOTER_LINKS.map(({ title, links }) => {
              return (
                <Stack className="w-full sm:flex-1 gap-4" key={title}>
                  <Text
                    fz={18}
                    component="h3"
                    className="font-semibold text-accent-9"
                  >
                    {title}
                  </Text>
                  <Stack className="gap-3">
                    {links.map(({ name, link }) => {
                      return (
                        <Text
                          fz={15}
                          component={Link}
                          href={link}
                          key={name}
                          className="hover:underline w-fit"
                        >
                          {name}
                        </Text>
                      );
                    })}
                  </Stack>
                </Stack>
              );
            })}
          </Flex>
        </div>

        <Divider bg="gray.4" my={{ base: 10, sm: 30 }} />
        <Center
          component="figure"
          className="h-20 sm:h-full"
          style={{
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <svg
            className="hover:transition-all hover:duration-300 group"
            width="1195"
            height="163"
            viewBox="0 0 1195 163"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-[var(--accent-2)] transition-all duration-300"
              d="M68.8529 3.97142L101.712 99.0584L137.652 3.97142H186.736V4.58753C178.932 7.6681 174.208 17.1152 175.646 28.4106L190.022 134.998C191.665 146.705 196.799 154.098 204.809 157.384V158H142.787V157.384C149.358 153.482 154.493 146.499 152.85 134.998L138.063 24.0978L85.6933 160.054H84.6665L38.2525 27.3838L23.2604 132.534C21.4121 144.856 27.5732 154.303 35.1719 157.384V158H0.0534312V157.384C8.47366 153.893 13.6079 145.472 15.4563 132.945L30.4484 28.4106C32.0914 17.1152 27.3678 7.87348 19.3583 4.58753V3.97142H68.8529ZM336.824 108.916C336.824 140.543 304.991 161.081 270.078 161.081C246.255 161.081 222.227 155.946 203.333 147.115L219.968 104.809H220.789C229.004 133.561 246.871 153.687 275.623 153.687C297.393 153.687 310.331 143.419 310.331 129.043C310.331 109.122 288.356 101.523 265.971 94.7456C241.532 87.5576 216.682 77.0837 216.682 49.9746C216.682 20.8119 245.228 0.890847 275.829 0.890847C297.187 0.890847 313.822 4.58753 327.582 9.31108L313.206 45.8672H312.385C304.17 23.2763 290.41 8.48959 270.489 8.48959C254.675 8.48959 243.175 15.6776 243.175 29.0267C243.175 48.9478 265.971 56.1358 288.973 62.913C312.59 69.8957 336.824 80.7803 336.824 108.916ZM470.195 108.916C470.195 140.543 438.363 161.081 403.449 161.081C379.626 161.081 355.598 155.946 336.704 147.115L353.339 104.809H354.16C362.375 133.561 380.242 153.687 408.994 153.687C430.764 153.687 443.702 143.419 443.702 129.043C443.702 109.122 421.728 101.523 399.342 94.7456C374.903 87.5576 350.053 77.0837 350.053 49.9746C350.053 20.8119 378.6 0.890847 409.2 0.890847C430.558 0.890847 447.194 4.58753 460.953 9.31108L446.577 45.8672H445.756C437.541 23.2763 423.781 8.48959 403.86 8.48959C388.047 8.48959 376.546 15.6776 376.546 29.0267C376.546 48.9478 399.342 56.1358 422.344 62.913C445.961 69.8957 470.195 80.7803 470.195 108.916ZM603.566 108.916C603.566 140.543 571.734 161.081 536.821 161.081C512.997 161.081 488.969 155.946 470.075 147.115L486.71 104.809H487.531C495.746 133.561 513.614 153.687 542.366 153.687C564.135 153.687 577.073 143.419 577.073 129.043C577.073 109.122 555.099 101.523 532.713 94.7456C508.274 87.5576 483.424 77.0837 483.424 49.9746C483.424 20.8119 511.971 0.890847 542.571 0.890847C563.93 0.890847 580.565 4.58753 594.325 9.31108L579.949 45.8672H579.127C570.912 23.2763 557.152 8.48959 537.231 8.48959C521.418 8.48959 509.917 15.6776 509.917 29.0267C509.917 48.9478 532.713 56.1358 555.715 62.913C579.332 69.8957 603.566 80.7803 603.566 108.916ZM744.488 162.107H743.872L634.203 39.2953V133.355C634.203 144.651 640.159 153.482 648.785 157.384V158H612.229V157.384C621.06 153.482 625.783 144.651 625.783 133.355V29.8482L625.373 29.4375L625.783 28.8214C625.578 18.5528 621.06 8.69496 610.791 4.7929V3.97142H651.249L736.068 101.523V28.8214C736.068 18.3474 732.782 9.31108 720.87 4.58753V3.97142H757.632V4.58753C747.979 8.28422 744.488 18.3474 744.488 28.8214V162.107ZM770.313 132.329L829.46 2.53382H830.693L892.304 133.15C899.492 148.142 903.805 154.919 911.404 157.384V158H842.604V157.384C852.051 154.098 858.212 145.883 852.667 133.972L841.988 110.765H788.386L778.939 132.123C772.983 145.678 781.609 154.303 790.645 157.384V158H749.571V157.384C757.17 153.482 763.742 146.499 770.313 132.329ZM791.467 103.371H838.497L814.468 51.0015L791.467 103.371ZM920.13 132.329L979.277 2.53382H980.509L1042.12 133.15C1049.31 148.142 1053.62 154.919 1061.22 157.384V158H992.421V157.384C1001.87 154.098 1008.03 145.883 1002.48 133.972L991.805 110.765H938.203L928.756 132.123C922.8 145.678 931.426 154.303 940.462 157.384V158H899.388V157.384C906.987 153.482 913.558 146.499 920.13 132.329ZM941.284 103.371H988.314L964.285 51.0015L941.284 103.371ZM1123.62 161.286C1079.05 161.286 1049.68 127.81 1049.68 87.5576C1049.68 37.8577 1091.99 0.685478 1143.13 0.685478C1161.41 0.685478 1179.89 3.97142 1193.03 8.90034L1169.83 57.9841H1169.21C1163.25 24.3032 1152.58 8.69496 1132.86 8.69496C1108.63 8.69496 1087.88 32.1073 1087.88 66.199C1087.88 105.425 1110.06 130.069 1142.51 130.069C1162.43 130.069 1181.74 119.39 1193.24 98.4423L1194.27 98.853C1185.02 134.998 1157.92 161.286 1123.62 161.286Z"
              fill="url(#paint0_linear_2361_4802)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2361_4802"
                x1="524.88"
                y1="-21.0001"
                x2="520.886"
                y2="158"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.777153" stop-color="var(--accent-1)" />
                <stop offset="0.892153" stop-color="#003000" />
              </linearGradient>
            </defs>
          </svg>
        </Center>
        {/* <Flex align='center' justify='center' gap={4}>
          <Copyright size='18' color='gray' />
          <Text>MSSNAAC {new Date().getFullYear()}. All rights reserved.</Text>
        </Flex> */}
      </Stack>
    </Stack>
  );
}
