import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedProjectsData } from "../lib/projects";
import Link from "next/link";
import Date from "../components/date";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

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
        <Link href={"https://github.com/procrastian"} target="_blank">
          <AiFillGithub className="icon"/>
        </Link>
        <Link href={"http://www.linkedin.com/in/dev-ian-grantham"} target="_blank">
          <AiFillLinkedin className="icon"/>
        </Link>
        {/* <Link href={"mailto:dev.iangrantham@gmail.com"} target="_blank"><AiFillMail /></Link> */}
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
          {allProjectsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
