import Image from "next/image";
import { getData } from "@/app/lib/util/sanity";
import Landing from "./landing";

export default async function Home({params}:any) {
  const query = await getData(`{
    'home':*[_type=="home"]{'walkIcon':walkIcon.asset->url},
    'art':*[_type=='artwork' && slug.current=='${params.slug}']{title, sell, sold, price, bg, slug, 'images':images[]{'url':img.asset->url},summary,'cover':cover.asset->url,scale,details{mats[]->{title}, size,collection->{title,year, slug,summary, gallery,artworks[]->{title,slug,'cover':cover.asset->url, scale, details{size,mats[]->{title}}} }}, year}
    }`
  )


  const {home, art} = query.data  
  console.log(art[0].details.collection)
  return (
    <Landing home={home[0]} art={art[0]} />
  );
}
