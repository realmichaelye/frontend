import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { watch } = router.query;

  return (
    <h1>{watch}</h1>
  )
}
