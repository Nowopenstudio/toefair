import Image from "next/image";
import { getData } from "@/app/lib/util/sanity";
import Landing from "./landing";

export default async function Home() {
  const query = await getData(`{
      'home':*[_type=="home"]{'navIcon':navIcon.asset->url},
    'art':*[_type=='artwork'] | order(_createdAt desc){title, sell, price, sold, slug,'cover':cover.asset->url,scale,details{mats[]->{title}, size, collection->{title, slug, gallery}}, year}
    }`
  )

  const {art, home} = query.data
  return (
    <Landing art={art} home={home[0]} />
  );
}
