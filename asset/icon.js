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
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 5.75h14.5M4.75 18.25h14.5M4.75 12h14.5"
            ></path>
        </svg>
    )
}