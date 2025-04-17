import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "@/components/Layout";
import {Inter, Work_Sans, Poppins, Open_Sans, Dancing_Script} from 'next/font/google';
import {ThemeProvider} from "@/util/theme-provider";
const inter = Inter({subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"]});
const workSans = Work_Sans({subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"]});
const poppins = Poppins({subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"]});
const openSans = Open_Sans({subsets: ['latin'], weight: ["300", "400", "500", "700"]});
const dancingScript = Dancing_Script({subsets: ['latin'], weight: ["400", "500", "600", "700"], variable: '--font-dancing-script'});

export default function App({Component, pageProps}: AppProps) {
    return (
                <ThemeProvider attribute='class' themes={["dark", "light"]} defaultTheme='dark' enableSystem={false}>
                    <main className={`${openSans.className} ${dancingScript.variable}`}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                    </main>
                </ThemeProvider>
        )
}
