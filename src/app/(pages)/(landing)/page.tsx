'use client';

import Faq from '@/app/components/faq';
import Hero from '@/app/components/hero';

export default function Landing() {
    return (
        <main className="flex flex-col gap-8">
            <Hero />
            <Faq />
        </main>
    );
}
