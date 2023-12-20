import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Shots from '@/components/Shots'

async function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return (
    <section>
      <Categories params={searchParams} />
      <Shots />
      <Footer/>
    </section>
  )
}

export default page