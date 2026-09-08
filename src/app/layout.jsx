import "./globals.css";

export const metadata = {
  title: "Gopi Bapanapalli | Full Stack Software Engineer",
  description: "Professional portfolio of Gopi Bapanapalli, showcasing full-stack software engineering solutions with React, Spring Boot, Redis, Kafka, and SQL databases.",
  keywords: ["Gopi Bapanapalli", "Software Engineer", "Full Stack Developer", "React", "Spring Boot", "Portfolio"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
