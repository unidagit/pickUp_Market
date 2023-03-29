import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ThemeProvider } from "styled-components";
import { queryClient } from "../services";
import GlobalStyle from "../styles/global";
import { theme } from "../styles/theme";

type ProviderProps = {
  children: React.ReactNode;
};

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
