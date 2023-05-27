import Content from "@/components/recipes/content";

export default async function Loading() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Content loading />
    </>
  );
}
