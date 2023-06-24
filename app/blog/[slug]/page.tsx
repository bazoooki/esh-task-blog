
export default async function Page({ params }: { params: { slug: string } }) {

  return <div>
  blog {params.slug}
  </div>
}