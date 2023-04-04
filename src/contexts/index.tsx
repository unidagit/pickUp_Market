import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ThemeProvider } from "styled-components";
import { ProviderProps } from "../common/types";
import { queryClient } from "../services";
import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

export default function AppProviders({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
