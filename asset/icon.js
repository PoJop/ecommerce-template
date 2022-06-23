export const CartIcon = ({ color = '#ffff' }) => {

    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M7.75 7.75h11.5l-1.637 6.958a2 2 0 01-1.947 1.542h-4.127a2 2 0 01-1.933-1.488L7.75 7.75zm0 0l-.75-3H4.75"
            ></path>
            <circle cx="10" cy="19" r="1" fill={color}></circle>
            <circle cx="17" cy="19" r="1" fill={color}></circle>
        </svg>
    )
}
export const BurgerMenuIcon = ({ color = '#ffff' }) => {

    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" >
            <path
                stroke="#666"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 5.75h14.5M4.75 18.25h14.5M4.75 12h14.5"
            ></path>
        </svg>
    )
}
export const StarIcon = ({ color = '#ffff' }) => {

    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 4.75l1.75 5.5h5.5l-4.5 3.5 1.5 5.5-4.25-3.5-4.25 3.5 1.5-5.5-4.5-3.5h5.5L12 4.75z"
            ></path>
        </svg>
    )
}
export const ArrowIcon = ({ className }) => {

    return (
        <svg
            className={`${className}`}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="9"
            fill="none"
            viewBox="0 0 16 9"
        >
            <path
                stroke="#999"
                d="M1.165.764L8 7.6m0 0l.236.235M8 7.6L14.835.764M8 7.6l-.236.235"
            ></path>
        </svg>
    )
}
export const CloseIcon = ({ }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            fill="none"
            viewBox="0 0 14 15"
        >
            <path
                fill="#666"
                d="M.99.782L13.717 13.51l-.707.707L.282 1.49.99.782z"
            ></path>
            <path
                fill="#666"
                d="M13.717 1.49L.99 14.217l-.708-.707L13.01.782l.707.708z"
            ></path>
        </svg>
    )
}
export const FilterIcon = ({ }) => {

    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 8h2.5M12.75 8h6.5M4.75 16h7.5M17.75 16h1.5"
            ></path>
            <circle
                cx="10"
                cy="8"
                r="2.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            ></circle>
            <circle
                cx="15"
                cy="16"
                r="2.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            ></circle>
        </svg>
    )
}
export const DeleteIcon = ({ }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
        >
            <path
                fill="none"
                stroke="#f0506e"
                strokeWidth="1.06"
                d="M16 16L4 4M16 4L4 16"
            ></path>
        </svg>
    )
}