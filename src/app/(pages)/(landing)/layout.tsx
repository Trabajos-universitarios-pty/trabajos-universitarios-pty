import { WhatsappFAB } from '@/app/components/common/whatsapp-button';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <WhatsappFAB />
        </>
    );
}
