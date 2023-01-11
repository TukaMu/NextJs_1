import Link from "../components/Link";
import Styler from "../theme/Styler";

export default function Home() {
    return (
        <div>
            <Styler as={"h1"} style={'color: red;'}>
                HOME
            </Styler>
            <Link href={"/faq"}>
                FAQ
            </Link>
        </div>
    )
};