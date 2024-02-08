import Layout from "../../components/layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const projectData = await getProjectData(params.id);

  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={projectData.date} />
          <br></br>
          <Link className="links" href={projectData.view} target="_blank">
            View Live
          </Link>
          <br></br>
          <Link className="links" href={projectData.github} target="_blank">
            View Github
          </Link>
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  );
}
