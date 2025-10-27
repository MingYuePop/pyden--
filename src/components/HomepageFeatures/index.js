import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '📚 前端开发',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        分享前端开发经验，包括 HTML、CSS、JavaScript 以及各种框架的使用心得和最佳实践。
      </>
    ),
  },
  {
    title: '🤖 AI 最新动态',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        追踪人工智能领域的最新发展，分享 AI 工具使用经验和行业资讯。
      </>
    ),
  },
  {
    title: '🛠️ 项目教程',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        详细的搭建教程，从零开始构建项目，解决开发中遇到的各种问题。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
