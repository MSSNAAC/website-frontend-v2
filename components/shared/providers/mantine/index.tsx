import {
  ColorSchemeScript,
  DirectionProvider,
  MantineProvider,
} from "@mantine/core";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { theme } from "../theme";

interface MantineProviderProps {
  children: ReactNode;
}

export function CustomMantineProvider({ children }: MantineProviderProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <ColorSchemeScript defaultColorScheme="light" />
      {/*
        MantineProvider is a context provider that manages theme state
        and provides theme API to all components inside its subtree
      */}
      <MantineProvider theme={theme} defaultColorScheme="light">
        {/*
            DirectionProvider is a context provider that manages direction state
            and provides direction API to all components inside its subtree
          */}
        <DirectionProvider>{children}</DirectionProvider>
      </MantineProvider>
    </ThemeProvider>
  );
}
