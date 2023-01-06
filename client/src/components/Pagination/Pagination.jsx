import React from "react";

export default function Pagination({restaurantsForPage,allRest,pagination,currentPage}){
    const pageNumbers=[]
    for(let i=1; i<=Math.ceil(allRest/ restaurantsForPage); i++){
        pageNumbers.push(i)
    }
    const prevHandler=()=>{
        if(currentPage <= 1) return
        pagination(currentPage -1)
    }
    const nextHandler=()=>{
        if(currentPage >= pageNumbers.length) return
        pagination(currentPage + 1)
    }
console.log(pageNumbers)
    return(
    <>
        <div>
                 <button  onClick={prevHandler}>prev</button>
                {pageNumbers?.map((number)=>(
                    <button  key={number} onClick={()=> pagination(number)}>
                        {number}
                    </button>
                )
                )}
                <button onClick={nextHandler}>next</button>

            
            
        </div>
        </>
    )}