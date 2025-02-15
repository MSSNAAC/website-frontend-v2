import { ActionIcon, MenuTarget, MenuTargetProps } from "@mantine/core";

interface FlowMenuTargetProps extends Omit<MenuTargetProps, "children"> {
  disabled?: boolean;
}

export function FlowMenuTarget(props: FlowMenuTargetProps) {
  return (
    <MenuTarget {...props}>
      <ActionIcon variant='transparent' c='gray' size='lg' ta='center'>
        {/* <MoreIcon /> */}
      </ActionIcon>
    </MenuTarget>
  );
}
