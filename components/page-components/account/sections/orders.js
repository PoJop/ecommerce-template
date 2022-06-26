import Link from 'next/link'



export const Orders = () => {

    return (
        <div>
            <ul>
                {[1, 2].map((e, i) =>
                    <li key={i} className="p-4 custom-border last:border-none">
                        <div>
                            <Link href={'#'}>
                                <a className="text-xl text-gray-900">#36637649</a>
                            </Link>
                            &nbsp;
                            <span className="text-sm text-gray-400">from June 17, 2018</span>
                        </div>
                        <div className="py-6">
                            <table className="w-full">
                                <tbody className="w-full">
                                    <tr className="w-full custom-border ">
                                        <th className="py-[7px] lg:py-[10px] lg:w-[300px] text-gray-400 font-normal  block lg:table-cell">
                                            Items
                                        </th>
                                        <td className="py-[7px] lg:py-[10px] text-gray-600 block lg:table-cell ">
                                            7
                                        </td>
                                    </tr>
                                    <tr className="w-full custom-border">
                                        <th className="py-[7px] lg:py-[10px] lg:w-[300px] text-gray-400 font-normal block lg:table-cell">
                                            Shipping
                                        </th>
                                        <td className="py-[7px] lg:py-[10px] text-gray-600 block lg:table-cell ">
                                            Pick up from store
                                        </td>
                                    </tr>
                                    <tr className="w-full custom-border">
                                        <th className="py-[7px] lg:py-[10px] lg:w-[300px] text-gray-400 font-normal block lg:table-cell">
                                            Payment
                                        </th>
                                        <td className="py-[7px] lg:py-[10px] text-gray-600 block lg:table-cell ">
                                            Online by card
                                        </td>
                                    </tr>
                                    <tr className="w-full custom-border">
                                        <th className="py-[7px] lg:py-[10px] lg:w-[300px] text-gray-400 font-normal block lg:table-cell">
                                            Total
                                        </th>
                                        <td className="py-[7px] lg:py-[10px] text-gray-600 block lg:table-cell ">
                                            $4896.00
                                        </td>
                                    </tr>
                                    <tr className="w-full">
                                        <th className="py-[7px] lg:py-[10px] lg:w-[300px] text-gray-400 font-normal block lg:table-cell">
                                            Status
                                        </th>
                                        <td className="py-[7px] lg:py-[10px] text-gray-600 block lg:table-cell">
                                            <span>Processing</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}