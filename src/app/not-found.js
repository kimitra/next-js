import Link from "next/link";

export default function NotFound() {
    return (
        <section className="page-section">
            <h1>404 - Page Not Found</h1>
            <p>This page or profile does not exist.</p>
            <Link href="/" className="button">Return Home</Link>
        </section>
    );
}