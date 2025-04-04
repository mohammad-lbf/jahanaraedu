import Head from 'next/head';
import ArticlesPage from '../../components/templates/ArticlesPage'

const Articles = () => {
    return (
        <div className='page-padding-tops pb-4'>
            <Head>

              <meta name="og:title" content="مقالات آموزشی" />

              <title>مقالات آموزشی</title>
            </Head>
           <ArticlesPage />
           
        </div>
    );
};

export default Articles;