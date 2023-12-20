import { getUserData } from "@/actions/user.action";
import About from "@/components/About";
import DashboardMenu from "@/components/DashboardMenu";
import LikedShots from "@/components/LikedShots";
import Work from "@/components/Work";
import Image from "next/image";
import Link from "next/link";

export default async function page(props: { searchParams: { [key: string]: string } }) {
  const user: any = await getUserData();
  const { searchParams } = props;
  return (
    <section>
      <div>
        <div className="p-4 space-y-2">
          <Image className="hover:brightness-75 transition-all cursor-pointer" src="/default-profile-pic.png" alt="profileImage" width={100} height={100} />
          <h1 className="text-2xl font-bold text-gray-800 "> {user && user.name} </h1>
        </div>
        <div className="p-4">
          <Link href="/account/profile" className="bg-white border text-sm  rounded-full px-6 py-3 hover:border-gray-300 transition-all ">
            Edit Profile
          </Link>
        </div>
        <DashboardMenu />
        <div className="border-t p-6">
          {
            searchParams.option === "work" ? <Work /> : (
              searchParams.option === "liked-shots" ? <LikedShots /> : (
                searchParams.option === "about" ?
                  <About />
                  : <Work />
              )
            )
          }
        </div>
      </div>
    </section>
  )
}