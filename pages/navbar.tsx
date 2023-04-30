import Link from "next/link";

function Navbar() {
    return (
        <nav>
            <ul>
                <li className="list"> Hanu Martial Arts</li>
            </ul>
            <ul>
                <li className="clicks">
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className="clicks">
                    <Link href="/team">
                        Team
                    </Link>
                </li>
                <li className="clicks">
                    <Link href="/about">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;