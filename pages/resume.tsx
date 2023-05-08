import Head from "next/head";

export default function Resume() {
    return <>
        <Head>
            <title> Khoi Nguyen Resume</title>
        </Head>
        <iframe src="/resume.pdf" className="w-full h-full fixed" />
    </>
}