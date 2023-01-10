import Link from "../components/Link";

export default function Home() {
    return (
        <div>
            <h1>
                HOME
            </h1>
            <Link href={"/faq"}>
                FAQ
            </Link>
        </div>
    )
};