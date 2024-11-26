'use client';

import Hero from '@/app/components/hero';

export default function Landing() {
    return (
        <main className="flex flex-col gap-8 container">
            <Hero />
            <Hero />
            <Hero />
        </main>
    );
}
