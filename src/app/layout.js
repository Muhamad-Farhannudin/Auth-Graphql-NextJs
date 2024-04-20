"use client"

import { useRouter } from "next/navigation";
import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo-wrapper"
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && router.pathname !== '/login') {
      router.push('/login')
    }
  }, [])

  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
