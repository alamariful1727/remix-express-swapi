import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <div className="flex min-h-screen flex-col justify-between antialiased mx-auto">
    <Navbar />
    <main className="flex-1 bg-white p-6">
      <Outlet />
    </main>
    <Footer />
  </div>;
}
