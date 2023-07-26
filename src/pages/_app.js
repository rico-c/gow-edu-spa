import { ThemeProvider } from "next-themes";
import { ConfigProvider } from 'antd';
import { appWithTranslation } from "react-i18next";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#117c9a",
          },
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
