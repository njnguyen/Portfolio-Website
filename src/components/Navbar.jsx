import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">Jackie Nguyen</Link>
            </div>
            <div className="tabs">
                <Link href="/projects" className="nav-link">Projects</Link>
                <Link href="/blog" className="nav-link">Blog</Link>
                <Link href="/about" className="nav-link">About Me</Link>
                <Link href="" className="nav-link">Resume</Link>
            </div>
        </div>
    );
}

export default Navbar;