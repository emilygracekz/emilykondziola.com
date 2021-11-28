/** @jsx jsx */
import { useContext, useState } from "react";
import { css, jsx } from "@emotion/core";
import Head from "next/head";
import BlogCard from "@components/BlogCard";
import Context from "@util/context";
import Switch from "react-switch";
import { theme } from "@styles/theme";

const Home = () => {
  const [isDark, setIsDark] = useState(true);
  const { dispatch } = useContext(Context);

  const handleOnClick = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
    setIsDark(!isDark);
  };

  const Container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .switch {
      left: 85%;
    }

    .name,
    .projects {
      text-transform: capitalize;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 0rem;
      text-align: center;
      margin-top: 7rem;
      z-index: 1;
    }

    .projects {
      font-size: 1.5rem;
      width: 100%;
      margin-bottom: 0.5rem;
      z-index: 1;
    }

    .sub-heading {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      font-size: 1rem;
    }

    .grid {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-content: stretch;
    }

    ${theme.mediaQuery.ipad} {
      .switch {
        left: 90%;
      }

      .name {
        font-size: 5rem;
      }

      .sub-heading {
        font-size: 1.5rem;
      }
    }

    ${theme.mediaQuery.desktop} {
      .switch {
        left: 95%;
      }
    }
  `;

  return (
    <section css={Container}>
      <Head>
        <title>Emily Kondziola</title>
        <link rel="icon" href="home.png" />
      </Head>
      <section>
        <Switch
          onChange={handleOnClick}
          checked={isDark}
          checkedIcon={false}
          uncheckedIcon={false}
          className="switch"
        />
        <div>
          <h1 className="name">Emily Kondziola</h1>
          <div className="sub-heading">
            <h2>
              Software Engineer at{" "}
              <a href="https://studio.jogg.co/" className="jogg">
                Jogg
              </a>
            </h2>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
