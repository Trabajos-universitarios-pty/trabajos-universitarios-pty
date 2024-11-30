'use client';

import Hero from '@/app/components/hero';
import Faq from '@/app/faq';
import Services from '@/app/services';

export default function Landing() {
    return (
        <main className="flex  flex-col gap-8">
            <Hero />
            <Services />
            <Faq />
        </main>
    );
}
