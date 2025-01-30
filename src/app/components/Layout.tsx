import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <HeaderComponent/>
        {children}
      <FooterComponent/>
    </>
  );
}
