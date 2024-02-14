import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedProjectsData } from "../lib/projects";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Home({ allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Link
          className="tooltip"
          href={"https://github.com/procrastian"}
          target="_blank"
        >
          <AiFillGithub className="icon" />
          <span class="tooltiptext">Github</span>
        </Link>
        <Link
          className="tooltip"
          href={"http://www.linkedin.com/in/dev-ian-grantham"}
          target="_blank"
        >
          <AiFillLinkedin className="icon tooltip" />
          <span class="tooltiptext">LinkedIn</span>
        </Link>
        <Link
          className="tooltip"
          href={
            "https://app.enhancv.com/share/b0d4df68/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
          }
          target="_blank"
        >
          <AiFillProfile className="icon" />
          <span class="tooltiptext">CV</span>
        </Link>
      </section>
      <section className={utilStyles.headingMd}>
        <p>
          My name is Ian Grantham, I'm a junior full stack software engineer
          based in the UK. I'm passionate about solving modern web development
          problems, while creating engaging UX focussed designs.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, title, tagline }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <p>{tagline}</p>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
