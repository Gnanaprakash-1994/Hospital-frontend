import React,{useState} from 'react'

const PageCard = ({data=[]}) => {

    const [currentPage,setCurrentPage] = useState(1)
    const rowsPerPage=3

    //Calculate total no of pages
    const totalPages = Math.ceil(data.length / rowsPerPage)

    //Get current data slice
    const currentData = data.slice(
        (currentPage-1)*rowsPerPage,
        currentPage*rowsPerPage
    )

    // handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //handle previous Page
    const handlePrevious = () => {
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }

    //handle next page
    const handleNext = () => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage+1)
        }
    }
  return (
    <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                    <div className="flex items-center">
                        <button onClick={handlePrevious} disabled={currentPage===1} type="button" className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                            <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index + 1}
                            type="button"
                            className={`w-full px-4 py-2 text-base ${currentPage === index + 1 ? 'text-indigo-500' : 'text-gray-600'} bg-white border hover:bg-gray-100`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                        ))}
                        <button onClick={handleNext} disabled={currentPage===totalPages} type="button" className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                            <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
  )
}

export default PageCard