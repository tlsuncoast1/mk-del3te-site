import './globals.css';

export const metadata = {
  title: 'MK DEL3TE',
  description: 'MK DEL3TE — neon glitch electronic artist portal and Project Records gateway.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
