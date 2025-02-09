import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <HeaderComponent/>
        {children}
      <FooterComponent/>
    </>
  );
}
