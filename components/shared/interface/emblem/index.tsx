import { Flex, type FlexProps } from "@mantine/core";
import { Picture } from "../picture";

interface EmblemProps extends FlexProps {
  image?: string;
  name?: string;
  skeleton?: boolean;
}

export function Emblem({ image, name, skeleton, ...props }: EmblemProps) {
  const noOrganizationInfo = !image && !name;

  return (
    <Flex
      c='gray.12'
      hidden={noOrganizationInfo}
      align='center'
      justify='center'
      gap={3}
      {...props}
    >
      <Picture alt={name} hidden={!image} h='100%' src={image} mih={85} />
    </Flex>
  );
}
