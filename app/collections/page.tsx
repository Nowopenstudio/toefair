import Image from "next/image";
import { getData } from "@/app/lib/util/sanity";
import Landing from "./landing";

export default async function Home({params}:any) {
  const query = await getData(`{
    'home':*[_type=="home"]{'navIcon':navIcon.asset->url},
    'collection':*[_type=='collection']{title, bg, summary, gallery,'cover':cover.asset->url,slug,artworks[]->{title,slug,scale,'cover':cover.asset->url}}
    }`
  )


  const {home, collection} = query.data  
  console.log(collection)
  return (
    <Landing home={home[0]} collection={collection} />
  );
}
