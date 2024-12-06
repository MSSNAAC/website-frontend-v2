import type { MantineColors } from "@/packages/theme";
import type { MantineColorsTuple } from "@mantine/core";

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<MantineColors, MantineColorsTuple>;
  }
}
