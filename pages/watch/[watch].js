import { useRouter } from 'next/router';
import Layout from '../../components/Layout.js';

import CoursePlayer from '../../components/CourseView/coursePlayer.js';

export default () => {
  const router = useRouter();
  const { watch } = router.query;

  return (
    <Layout>
      <div className="container">
        <p>Course ID: {watch}</p>
        <CoursePlayer/>
      </div>
    </Layout>
  )
}
