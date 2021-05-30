import { MainContainer } from "../Containers/MainContainer";
import { RestContainer } from "../Containers/RestContainer";
import Head from "next/head";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import svg from "../public/svg/404.json";
import { SWebsiteName } from "../Typography";

export default function Custom404() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: svg,
    });
  }, []);
  return (
    <>
      <Head>
        <title>lol | Error404</title>
        <meta name="keywords" content="About" />
      </Head>
      <MainContainer fullvh>
        <RestContainer auto>
          <SWebsiteName bold>Page not found </SWebsiteName>
          <br />
          <div className="container" ref={container}></div>
        </RestContainer>
      </MainContainer>
    </>
  );
}
