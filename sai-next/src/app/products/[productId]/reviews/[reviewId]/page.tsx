//The name of the folder gives routes, to get params, use the productId(case sensitive) and if nested 

import { notFound } from "next/navigation";

//use the reviewId(case sensitive) in the file name
export default async function ProductReview(
    {params}:{params:{productId:string, reviewId:string}}
){
    const {productId, reviewId}=await params;
    if(parseInt(reviewId)>10){
        notFound()
    }
    console.log("params", params)
    return(
        <>
        <h1>Product Review</h1>
        <p>Review ID: {reviewId}</p>
        <p>Product ID: {productId}</p>
        </>
    )
}