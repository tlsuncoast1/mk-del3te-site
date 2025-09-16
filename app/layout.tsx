export const metadata = {
  title: "MK DEL3TE",
  description: "MK DEL3TE",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
