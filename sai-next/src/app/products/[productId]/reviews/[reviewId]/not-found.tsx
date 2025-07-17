//To use params in not found , connect with usePathname
"use client"
import { usePathname } from "next/navigation";

export default function NotFound(){
    
    const pathname = usePathname();
   const productId=pathname.split("/")[2]
    const reviewId=pathname.split("/")[4]
    return(
        <h1>products page not found for product ID: {productId} and review ID: {reviewId}</h1>
    )
}