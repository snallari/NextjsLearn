import Link from "next/link"

export const Navigation = () => {
    return (
        <nav>
            <Link href={"/products"}>Products</Link>
            <Link href={"/profile"}>Profile</Link>
        </nav>
    )
}