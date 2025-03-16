import { Link } from "react-router";

export function Navigation() {
    return (
        <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
        }}>
            <Link to="/home">Home</Link>
            <Link to="/dashboard">Navigation</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}