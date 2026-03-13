export default function NavBar () {
    return (
        <nav style={{padding: "1rem", borderBottom: "1px solid #ddd" }}>
            <ul style={{display: "flex", gap: "1rem", listStyle:"none", margin: 0, padding: 0}}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
}