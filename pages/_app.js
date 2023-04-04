import Navigation from "@/components/navigation/Navigation";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
