import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

/* ===============================
   TOC STYLE CARD
================================ */
function TocCard({ chapter, title, description, icon, link }) {
  return (
    <div className={styles.tocCard}>
      <div className={styles.tocHeader}>
        <span className={styles.tocIcon}>{icon}</span>
        <span className={styles.tocChapter}>{chapter}</span>
      </div>

      <div className={styles.tocBody}>
        <Heading as="h3" className={styles.tocTitle}>
          {title}
        </Heading>
        <p className={styles.tocDescription}>{description}</p>

        <Link
          className={clsx('button button--secondary button--sm', styles.tocButton)}
          to={link}
        >
          Explore →
        </Link>
      </div>
    </div>
  );
}

/* ===============================
   HERO HEADER (UNCHANGED)
================================ */
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>

        <p className={styles.heroSubtitle}>
          Smart. Secure. Connected Education.
        </p>

        <div className={styles.buttons}>
          <Link
            className={clsx(
              'button button--secondary button--lg',
              styles.ctaButton
            )}
            to="/docs/frontmatter/introduction"
          >
            ⭐ Explore the System ⟶
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ===============================
   MAIN HOME
================================ */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Academic case study documentation for a complete School Management System"
    >
      <HomepageHeader />

      <main className={styles.main}>

        {/* TABLE OF CONTENTS — WITH INLINE CENTER ALIGNMENT */}
        <section className={styles.tocSection}>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Heading as="h2" className={styles.tocHeading} style={{ textAlign: 'center', margin: '0 auto 3rem auto' }}>
              Table of Contents
            </Heading>
          </div>

          {/* TOP ROW — 3 CARDS */}
          <div className={styles.tocGridTop}>
            <TocCard
              chapter="Chapter 1"
              icon="📘"
              title="Introduction & Scope"
              description="Overview of the School Management System case study and its objectives."
              link="/docs/frontmatter/introduction"
            />

            <TocCard
              chapter="Chapter 2"
              icon="🎓"
              title="Core Academic Modules"
              description="Student, Teacher, Attendance, Academic & Examination systems."
              link="/docs/core-modules/module-1-student"
            />

            <TocCard
              chapter="Chapter 3"
              icon="🏢"
              title="Administrative Systems"
              description="Finance, Parent Portal, Communication, Events & Library modules."
              link="/docs/admin-modules/module-6-financial"
            />
          </div>

          {/* BOTTOM ROW — 2 CARDS (CENTERED) */}
          <div className={styles.tocGridBottom}>
            <TocCard
              chapter="Chapter 4"
              icon="🤖"
              title="Support & Autonomous AI"
              description="Transport, Security, and AI-driven autonomous intelligence."
              link="/docs/support-ai/module-11-transport"
            />

            <TocCard
              chapter="Chapter 5"
              icon="🧩"
              title="Technical Architecture & Appendix"
              description="System architecture, data flow, and future enhancements."
              link="/docs/backmatter/architecture"
            />
          </div>
        </section>

      </main>
    </Layout>
  );
}