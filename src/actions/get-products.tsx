





import { Product } from "@/types/ProjectInterface";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API}/products`

interface Query { 
    categoryId?:string;
    isFeatured?:boolean;
    limit?:number;
    currentPage?:number;
    subCategoryId?:string;


}
const getProducts = async(query:Query):Promise<Product[]>=>{

    const url =  qs.stringifyUrl({
        url:URL,
        query:{
            categoryId:query.categoryId,
            isFeatured:query.isFeatured,
            limit:query.limit,
            currentPage:query.currentPage,
            subCategoryId:query.subCategoryId
        }
    })
    const res = await fetch(url)
    
    return res.json();

}
const getProductBySlug = async (slug:string):Promise<Product>=>{
    const res = await fetch(`${URL}/${slug}`)
    return res.json();

}


export {getProducts,getProductBySlug}

