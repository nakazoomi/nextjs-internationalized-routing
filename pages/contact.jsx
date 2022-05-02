import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';

export default function AnotherPage() {
  let { t } = useTranslation();

  return (
    <Layout>
      <h1>{t('contact:title')}</h1>
      <p>{t('contact:introduction')}</p>
    </Layout>
  );
}
