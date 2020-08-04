import { useRouter } from 'next/router';
import CoursePlayer from '../../components/CourseView/coursePlayer.js';

export default () => {
  const router = useRouter();
  const { watch } = router.query;

  return (
    <>
      <CoursePlayer/>
    </>
  )
}
