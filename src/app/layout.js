// app/layout.tsx
'use client'
import { Stack } from "@chakra-ui/react";
import { Providers } from "./providers";
import { Footer, Navbar } from "../../devlink";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Stack zIndex={9} position="fixed">
            <Navbar />  
          </Stack>
          {children}
          <Stack bgColor="gray.900">
            <Footer />
          </Stack>
        </Providers>
      </body>
    </html>
  );
}