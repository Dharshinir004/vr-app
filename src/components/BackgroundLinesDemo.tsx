import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        https://in.images.search.yahoo.com/images/view;_ylt=AwrKBHbELE9pz3EUHAa9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzkyY2RiYWRkYTE5ODg4MmRjZTJkYmE2M2JkNGU4ODczBGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dchemical%2Bdisaster%2Bresponse%2Bimages%26type%3DE210IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=1600&h=1156&imgurl=thumbs.dreamstime.com%2Fz%2Femergency-response-team-hazmat-suits-chemical-spill-site-industrial-facility-professionally-equipped-rushes-to-hazardous-313453855.jpg&rurl=https%3A%2F%2Fwww.dreamstime.com%2Femergency-response-team-hazmat-suits-chemical-spill-site-industrial-facility-professionally-equipped-rushes-to-hazardous-image313453855&size=225KB&p=chemical+disaster+response+images&oid=92cdbadda198882dce2dba63bd4e8873&fr2=piv-web&fr=mcafee&tt=Emergency+Response+Team+in+Hazmat+Suits+at+Chemical+Spill+Site+in+...&b=0&ni=21&no=2&ts=&tab=organic&sigr=wKDILkqnJ7LB&sigb=wUUlBR.rMbfV&sigi=R3KDi7Y_2SKF&sigt=1._JhdIEWJ0j&.crumb=QdqessfZB3f&fr=mcafee&fr2=piv-web&type=E210IN826G0, <br /> Sajana Textiles.
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free.
      </p>
      <div className="flex gap-4 mt-4">
        <img src="/images/sanjana-airlines.jpg" alt="Sanjana Airlines" className="w-32 h-32 object-cover rounded" />
        <img src="/images/sajana-textiles.jpg" alt="Sajana Textiles" className="w-32 h-32 object-cover rounded" />
      </div>
    </BackgroundLines>
  );
}
