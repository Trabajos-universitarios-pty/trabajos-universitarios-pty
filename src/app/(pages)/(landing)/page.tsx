'use client';

import AboutUs from '@/app/components/about-us';
import Hero from '@/app/components/hero';
import PaymentMethods from '@/app/components/payment-methods';
import Universities from '@/app/components/universities';
import Faq from '@/app/faq';
import Services from '@/app/services';

export default function Landing() {
    return (
        <main className="flex  flex-col gap-8">
            <Hero />
            <AboutUs />
            <Universities />
            <Services />
            <PaymentMethods />
            <Faq />
        </main>
    );
}
