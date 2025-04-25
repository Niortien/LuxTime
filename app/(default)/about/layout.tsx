import Beforefooter from "./Beforefooter";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      
      <Beforefooter />
    </div>
  );
}
