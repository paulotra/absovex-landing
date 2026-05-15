"use client";

import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Statistics from "@/components/Statistics";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import Why29 from "@/components/Why29";
import Score from "@/components/Score";
import WhyTrust from "@/components/WhyTrust";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container">
        <ProofStrip></ProofStrip>
        <Statistics></Statistics>
        <HowItWorks></HowItWorks>
        <WhatYouGet></WhatYouGet>
        <div className="lg:flex gap-x-10 py-20">
          <Why29></Why29>
          <Score></Score>
        </div>
        <WhyTrust></WhyTrust>
        <FAQ></FAQ>
      </div>
    </div>
  );
}
