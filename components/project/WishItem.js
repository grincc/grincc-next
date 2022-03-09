

export default function WishItem({wish,children}){


    return(
        <div className={"w-full pt-12"}>
            <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                    {/*<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">*/}
                    {/*    <span className="font-semibold title-font text-gray-700">CATEGORY</span>*/}
                    {/*    <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>*/}
                    {/*</div>*/}
                    <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-200 title-font mb-2">{wish.title}</h2>
                        <p className="leading-relaxed">{wish.description} </p>

                        <a href={wish.link} className="text-indigo-500 inline-flex items-center mt-4">Discussion
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokWidth="2"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <div className={"border-b py-2 border-gray-300   "} />
                    </div>
                </div>
            </div>

        </div>

    )



}