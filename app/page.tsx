import Image from "next/image";
import { getData } from "./lib/util/sanity";
import Landing from "./landing";

export default async function Home() {
  const query = await getData(`{
    'home':*[_type=="home"]{name,bio,'bioIcon':bioIcon.asset->url,"feat":heroes[]->{title,'cover':cover.asset->url,scale,slug}, 'next':upcoming[]->{title,slug,url,'feat':feat.asset->url}, 'navIcon':navIcon.asset->url, 'vip':ad.asset->url, press},
    'featProj':*[_type=='artwork'][0..2] | order(_createdAt desc){title, slug,'cover':cover.asset->url,scale,details{mats[]->{title}, size, collection->{title, slug, gallery}}, year},
    'exhibits':*[_type=='collection'][0..3]{title,slug,gallery,year}
    }`
  )

  const {home, featProj, exhibits} = query.data  
  return (
    <Landing home={home[0]} featProj={featProj} exhibits={exhibits}/>
  );
}
