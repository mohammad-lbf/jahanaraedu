import Head from 'next/head';
import React from 'react';
import ArticlePage from '../../components/templates/ArticlePage';
import { useRouter } from 'next/router';
import articles from '@/DB/articles';

const Article = () => {
  const router = useRouter();
  const currentArticle = articles.find(
    (item) => item.id === router.query.id
  );
  console.log(currentArticle)
  if (!router.query.id || !currentArticle) return <p>در حال بارگذاری...</p>;

  return (
    <div>
      <Head>
        <meta name="description" content={currentArticle.description} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta name="og:title" content={currentArticle.mainTitle} />
        <meta name="og:description" content={currentArticle.description} />

        <title>{currentArticle.mainTitle}</title>
      </Head>
      <ArticlePage articles={articles} article={currentArticle} />
    </div>
  );
};

export default Article;
