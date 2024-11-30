'use client';

import Hero from '@/app/components/hero';
import Faq from '@/app/faq';

export default function Landing() {
    return (
        <main className="flex flex-col gap-8">
            <Hero />
            <Faq />
        </main>
    );
}
