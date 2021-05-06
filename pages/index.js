import { MainContainer } from "../Containers/MainContainer";
import { RestContainer } from "../Containers/RestContainer";
import Head from "next/head";
import {
  SHeader,
  SParagraph,
  SWebsiteName,
  SWebsiteTagLine,
} from "../Typography";

export default function Home() {
  return (
    <>
      <Head>
        <title>lol | Home</title>
        <meta name="keywords" content="Home" />
      </Head>
      <MainContainer>
        <SWebsiteName bold>Home</SWebsiteName>
        <SWebsiteTagLine bold>lol</SWebsiteTagLine>
        <RestContainer auto>
          <SHeader bold>Home</SHeader>
          <SParagraph>Home</SParagraph>
          <SParagraph small>Home</SParagraph>
        </RestContainer>
      </MainContainer>
    </>
  );
}
