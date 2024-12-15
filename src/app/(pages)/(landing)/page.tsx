'use client';

import AboutUs from '@/app/components/about-us';
import Carousel from '@/app/components/carousel';
import Hero from '@/app/components/hero';
import Faq from '@/app/faq';
import Services from '@/app/services';
import { POSTS } from '@/utils/posts';

export default function Landing() {
    return (
        <main className="flex  flex-col gap-8">
            <Hero />
            <Carousel images={POSTS} />
            <AboutUs />
            <Services />
            <Faq />
        </main>
    );
}
