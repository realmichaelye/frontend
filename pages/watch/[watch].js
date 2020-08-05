import { useRouter } from 'next/router';
import Layout from '../../components/Layout.js';

import CoursePlayer from '../../components/CourseView/coursePlayer.js';

export default () => {
  const router = useRouter();
  const { watch } = router.query;

  return (
    <Layout>
      <CoursePlayer/>
    </Layout>
  )
}
