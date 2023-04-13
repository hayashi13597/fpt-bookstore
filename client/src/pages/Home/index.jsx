import React, { Suspense } from "react";
import Header from "@/components/Home/Header";
// import Main from "@/components/Home/Main";
const Main = React.lazy(
  () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(import("../../components/Home/Main"));
      }, 2000);
    })
);
import ScrollToTop from "@/components/ScrollToTop";
import Loading from "../../components/Loading";

const Home = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
      <ScrollToTop />
    </>
  );
};

export default Home;
