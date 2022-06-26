export const CartIcon = ({ color = '#ffff' }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
        >
            <circle cx="7.3" cy="17.3" r="1.4" fill={color}></circle>
            <circle cx="13.3" cy="17.3" r="1.4" fill={color}></circle>
            <path
                fill="none"
                stroke={color}
                d="M0 2L3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"
            ></path>
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
export const VisaIcon = ({ }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="25"
            baseProfile="tiny"
            viewBox="0 0 186.4 93.9"
        >
            <path
                fill="#1A1F71"
                d="M11.1 33.5L1.3 3.4h4.2l4.7 14.8c1.3 4.1 2.4 7.7 3.2 11.3h.1c.8-3.5 2.1-7.3 3.4-11.2L22 3.4h4.2L15.4 33.5h-4.3zm17.2-10.1c.1 5.3 3.5 7.5 7.4 7.5 2.8 0 4.5-.5 6-1.1l.7 2.8c-1.4.6-3.8 1.3-7.2 1.3-6.7 0-10.6-4.4-10.6-10.9s3.8-11.7 10.1-11.7c7.1 0 8.9 6.2 8.9 10.2 0 .8-.1 1.4-.1 1.8l-15.2.1zm11.5-2.8c.1-2.5-1-6.4-5.5-6.4-4 0-5.7 3.7-6 6.4h11.5zm6.9-2c0-2.5 0-4.7-.2-6.7h3.4l.1 4.2h.2c1-2.9 3.4-4.7 6-4.7.4 0 .8 0 1.1.1v3.7c-.4-.1-.8-.1-1.3-.1-2.8 0-4.7 2.1-5.3 5-.1.5-.2 1.2-.2 1.8v11.5h-3.9V18.6h.1zM64.1 5.8c0 1.3-.9 2.4-2.5 2.4-1.4 0-2.4-1.1-2.4-2.4 0-1.4 1-2.5 2.5-2.5 1.4 0 2.4 1.1 2.4 2.5m-4.4 6.1h3.9v21.6h-3.9V11.9zm9.1 21.6V14.9h-3v-3h3v-1c0-3 .7-5.8 2.5-7.6 1.5-1.4 3.4-2 5.3-2 1.4 0 2.6.3 3.4.6l-.5 3c-.6-.3-1.4-.5-2.5-.5-3.3 0-4.2 2.9-4.2 6.3v1.2H78v3h-5.2v18.6h-4zM86.1 5.8c.1 1.3-.9 2.4-2.5 2.4-1.4 0-2.4-1.1-2.4-2.4 0-1.4 1-2.5 2.5-2.5s2.4 1.1 2.4 2.5m-4.4 6.1h3.9v21.6h-3.9V11.9zm10.9 11.5c.1 5.3 3.5 7.5 7.4 7.5 2.8 0 4.5-.5 6-1.1l.7 2.8c-1.4.6-3.8 1.3-7.2 1.3-6.7 0-10.6-4.4-10.6-10.9S92.7 11.3 99 11.3c7.1 0 8.9 6.2 8.9 10.2 0 .8-.1 1.4-.1 1.8l-15.2.1zm11.5-2.8c0-2.5-1-6.4-5.5-6.4-4 0-5.7 3.7-6 6.4h11.5zm25.6-18.8v26.1c0 1.9 0 4.1.2 5.6h-3.5l-.2-3.8h-.1c-1.2 2.4-3.8 4.2-7.4 4.2-5.2 0-9.2-4.4-9.2-11 0-7.2 4.4-11.6 9.7-11.6 3.3 0 5.5 1.6 6.5 3.3h.1V1.8h3.9zm-3.9 18.9c0-.5 0-1.2-.2-1.7-.6-2.5-2.7-4.6-5.7-4.6-4.1 0-6.5 3.6-6.5 8.4 0 4.4 2.1 8 6.4 8 2.6 0 5-1.7 5.8-4.7.1-.5.2-1.1.2-1.7v-3.7zm18.4 12.8c.1-1.5.2-3.7.2-5.6V1.8h3.9v13.6h.1c1.4-2.4 3.9-4 7.4-4 5.4 0 9.2 4.5 9.1 11 0 7.7-4.9 11.6-9.7 11.6-3.1 0-5.6-1.2-7.2-4.1h-.1l-.2 3.6h-3.5zm4.1-8.7c0 .5.1 1 .2 1.4.8 2.7 3 4.6 5.9 4.6 4.1 0 6.6-3.4 6.6-8.3 0-4.3-2.2-8-6.4-8-2.7 0-5.2 1.8-6 4.8-.1.4-.2 1-.2 1.6v3.9h-.1zm20.9-12.9l4.7 12.8c.5 1.4 1 3.1 1.4 4.4h.1c.4-1.3.8-3 1.4-4.5l4.3-12.7h4.2l-5.9 15.4c-2.8 7.4-4.7 11.2-7.4 13.5-1.9 1.7-3.8 2.4-4.8 2.5l-1-3.3c1-.3 2.3-.9 3.4-1.9 1.1-.8 2.4-2.4 3.3-4.4.2-.4.3-.7.3-.9s-.1-.5-.3-1l-8-19.9h4.3zM66.5 48.2L54.6 78.3l-4.8-25.6c-.6-2.9-2.8-4.5-5.3-4.5H25l-.3 1.3c4 .9 8.5 2.3 11.3 3.8 1.7.9 2.2 1.7 2.7 3.9l9.1 35.3H60l18.6-44.3H66.5zm17 0L74 92.5h11.5l9.4-44.3zM110 60.5c0-1.6 1.6-3.3 4.9-3.7 1.6-.2 6.2-.4 11.3 2l2-9.4c-2.8-1-6.3-2-10.7-2-11.3 0-19.3 6-19.4 14.7-.1 6.4 5.7 9.9 10 12 4.5 2.2 6 3.5 5.9 5.5 0 3-3.6 4.3-6.8 4.3-5.8.1-9.1-1.6-11.8-2.8l-2.1 9.7c2.7 1.2 7.6 2.3 12.7 2.3 12 0 19.9-5.9 19.9-15.2.2-11.5-16-12.2-15.9-17.4m33.1 16.3l6.1-16.6 3.4 16.6h-9.5zm4.4-28.6c-2.2 0-4.1 1.3-4.9 3.2l-17.2 41h12l2.4-6.6h14.7l1.4 6.6h10.6l-9.2-44.3h-9.8v.1z"
            ></path>
        </svg>
    )
}
export const MasterCardIcon = ({ }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height="25"
            viewBox="0 0 361 136"
        >
            <path
                fill="#EC2127"
                fillRule="evenodd"
                d="M338.787 54.749c0-3.837 2.975-6.942 6.607-6.942 3.652 0 6.596 3.105 6.596 6.942 0 3.843-2.943 6.948-6.596 6.948-3.632 0-6.607-3.105-6.607-6.948zm6.608 5.303c2.776 0 5.042-2.382 5.042-5.303 0-2.906-2.266-5.267-5.042-5.267-2.765 0-5.042 2.361-5.042 5.267 0 2.921 2.277 5.303 5.042 5.303zm-.899-2.26h-1.353v-6.116h2.453c.499 0 1.059.03 1.488.337.469.345.739.924.739 1.537 0 .678-.385 1.312-.998 1.542l1.059 2.7h-1.504l-.895-2.397h-.99v2.397h.001zm0-3.437h.754c.277 0 .598.009.83-.127.229-.149.331-.446.331-.708 0-.23-.133-.507-.331-.615-.202-.137-.609-.106-.846-.106h-.738v1.556zM244.322 8.583l-1.81 11.773c-3.926-2.09-6.813-2.909-9.897-2.909-8.229 0-14.049 8.365-14.049 20.308 0 8.249 3.907 13.219 10.332 13.219 2.727 0 5.724-.876 9.391-2.797l-1.931 12.389c-4.056 1.167-6.702 1.582-9.769 1.582-11.92 0-19.334-8.991-19.334-23.423 0-19.413 10.244-32.969 24.898-32.969 1.893 0 3.584.185 4.958.583l4.556 1.194c1.356.537 1.661.619 2.655 1.05zm-36.689 8.069a6.076 6.076 0 00-1.131-.114c-3.642 0-5.701 1.927-9.083 7.185l.982-6.707h-10.013L181.6 61.149h11.108c3.972-26.974 4.988-31.632 10.313-31.632.324 0 .354 0 .808.045.982-5.318 2.327-9.228 4.182-12.794l-.378-.116zm-66.18 43.958c-3.005 1-5.38 1.455-7.931 1.455-5.642 0-8.723-3.437-8.723-9.708 0-1.23.092-2.557.315-3.957l.684-4.303.507-3.515 4.796-30.114h10.989l-1.26 6.548h5.656l-1.553 10.728h-5.642l-2.92 18.419c-.1.813-.185 1.413-.185 1.828 0 2.26 1.153 3.27 3.766 3.27 1.275 0 2.236-.133 2.975-.412l-1.474 9.761zM97.878 30.972c0 5.57 2.566 9.422 8.377 12.301 4.45 2.213 5.157 2.858 5.157 4.867 0 2.742-1.975 4.012-6.325 4.012-3.281 0-6.348-.548-9.883-1.767l-1.529 10.18.5.106 2.029.43c.653.139 1.614.263 2.882.4 2.636.246 4.657.364 6.087.364 11.596 0 16.961-4.682 16.961-14.734 0-6.04-2.236-9.612-7.762-12.286-4.611-2.197-5.134-2.715-5.134-4.764 0-2.394 1.829-3.624 5.38-3.624 2.166 0 5.103.257 7.907.657l1.575-10.191c-2.882-.491-7.162-.87-9.698-.87-12.304 0-16.57 6.773-16.524 14.919zM332.37 61.149h-10.462l.549-4.324c-3.047 3.416-6.174 4.907-10.214 4.907-8.085 0-13.383-7.285-13.383-18.32 0-14.679 8.233-27.073 18.01-27.073 4.296 0 7.544 1.86 10.603 6.042l2.406-15.504h10.896l-8.405 54.272zm-16.315-10.391c5.165 0 8.775-6.133 8.775-14.868 0-5.609-2.061-8.664-5.881-8.664-5.008 0-8.568 6.158-8.568 14.843 0 5.779 1.916 8.689 5.674 8.689zm-139.588 9.464c-3.782 1.188-7.438 1.788-11.358 1.772-12.327 0-18.768-6.784-18.768-19.755 0-15.167 8.192-26.331 19.329-26.331 9.083 0 14.917 6.257 14.917 16.063 0 3.247-.393 6.413-1.377 10.886h-21.98c-.092.672-.106.979-.106 1.369 0 5.158 3.288 7.756 9.721 7.756 3.943 0 7.493-.855 11.467-2.807l-1.845 11.047zm-6.202-26.28c.063-.922.078-1.674.078-2.233 0-3.607-1.946-5.713-5.234-5.713-3.506 0-6.018 2.813-7.048 7.916l12.204.03zM53.497 61.149H42.453l6.325-41.705-14.133 41.705h-7.569l-.915-41.46-6.663 41.46H9.154l8.63-54.273H33.7l.438 33.584L44.881 6.876h17.177l-8.561 54.273zM81.955 41.49c-1.169-.139-1.683-.19-2.475-.19-6.263 0-9.437 2.279-9.437 6.737 0 2.748 1.56 4.499 3.973 4.499 4.496 0 7.755-4.499 7.939-11.046zm8.039 19.659H80.84l.2-4.582c-2.79 3.654-6.517 5.349-11.582 5.349-6.01 0-10.113-4.918-10.113-12.024 0-10.774 7.17-17.029 19.428-17.029 1.252 0 2.851.097 4.496.327.345-1.46.438-2.09.438-2.864 0-2.915-1.921-4.021-7.102-4.021-3.127 0-6.717.476-9.191 1.261l-1.537.445-.968.286 1.521-9.898c5.519-1.715 9.153-2.376 13.249-2.376 9.499 0 14.533 4.482 14.533 12.94 0 2.197-.161 3.827-.914 8.755l-2.313 15.637-.377 2.824-.284 2.249-.192 1.537-.138 1.184zM263.363 41.49c-1.15-.139-1.684-.19-2.456-.19-6.288 0-9.472 2.279-9.472 6.737 0 2.748 1.577 4.499 3.991 4.499 4.517 0 7.739-4.499 7.937-11.046zm8.047 19.659h-9.166l.213-4.582c-2.788 3.654-6.523 5.349-11.581 5.349-6.01 0-10.13-4.918-10.13-12.024 0-10.774 7.163-17.029 19.445-17.029 1.245 0 2.859.097 4.493.327.339-1.46.438-2.09.438-2.864 0-2.915-1.92-4.021-7.099-4.021-3.146 0-6.726.476-9.179 1.261l-1.572.445-.956.286 1.538-9.898c5.526-1.715 9.152-2.376 13.219-2.376 9.514 0 14.548 4.482 14.548 12.94 0 2.197-.19 3.827-.906 8.755l-2.331 15.637-.342 2.824-.309 2.249-.202 1.537-.121 1.184zm30.878-44.497a5.515 5.515 0 00-1.112-.114c-3.629 0-5.704 1.927-9.102 7.185l.986-6.707h-10l-6.76 44.133h11.07c3.976-26.974 5.02-31.632 10.309-31.632.343 0 .32-.031.773.045 1.002-5.318 2.354-9.228 4.212-12.794l-.376-.116z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#F89620"
                fillRule="evenodd"
                d="M255.903 103.951c0 10.005-3.097 15.896-7.979 15.896-3.564.11-5.725-3.862-5.725-9.803 0-7.026 3.157-14.99 8.223-14.99 4.072.001 5.481 4.316 5.481 8.897zm10.872.184c0-11.121-5.495-19.777-15.823-19.777-11.89 0-19.59 10.526-19.59 26.022 0 11.094 4.551 20.165 15.808 20.165 11.36 0 19.605-8.043 19.605-26.41zm-31.86-27.584l-1.69 11.76c-3.675-2.075-6.349-2.936-9.239-2.936-7.724 0-13.119 8.401-13.119 20.344 0 8.245 3.613 13.233 9.631 13.233 2.566 0 5.374-.876 8.782-2.799l-1.79 12.381c-3.82 1.177-6.314 1.58-9.151 1.58-11.128 0-18.06-8.995-18.06-23.429 0-19.422 9.567-32.976 23.27-32.976 1.774 0 3.344.225 4.642.583l4.228 1.2c1.305.518 1.575.609 2.496 1.059zm-68.354 8.081a4.047 4.047 0 00-1.061-.122c-3.352 0-5.318 1.935-8.46 7.175l.914-6.695h-9.347l-6.31 44.138h10.321c3.713-27.001 4.695-31.647 9.646-31.647.292 0 .322 0 .753.05.931-5.339 2.184-9.25 3.92-12.823l-.376-.076zm134.829 44.024h-9.753l.502-4.308c-2.837 3.397-5.788 4.901-9.563 4.901-7.521 0-12.487-7.297-12.487-18.329 0-14.655 7.708-27.085 16.821-27.085 4.021 0 7.072 1.9 9.891 6.082l2.277-15.519h10.16l-7.848 54.258zm-15.26-10.382c4.862 0 8.214-6.128 8.214-14.871 0-5.625-1.915-8.645-5.465-8.645-4.695 0-8.031 6.135-8.031 14.848 0 5.751 1.79 8.668 5.282 8.668zm-216.364 10.2c-3.511 1.211-6.932 1.797-10.574 1.797-11.528 0-17.545-6.798-17.545-19.765 0-15.146 7.654-26.319 18.044-26.319 8.508 0 13.933 6.246 13.933 16.052 0 3.241-.369 6.417-1.252 10.892H51.798c-.062.659-.085.986-.085 1.371 0 5.146 3.082 7.742 9.069 7.742 3.689 0 7.024-.86 10.721-2.795l-1.737 11.025zm-5.772-26.259c.047-.933.077-1.676.077-2.243 0-3.599-1.813-5.705-4.88-5.705-3.297 0-5.642 2.833-6.586 7.902l11.389.046zm128.562 26.259c-3.522 1.211-6.95 1.797-10.579 1.797-11.551 0-17.56-6.798-17.56-19.765 0-15.146 7.662-26.319 18.044-26.319 8.51 0 13.952 6.246 13.952 16.052 0 3.241-.385 6.417-1.299 10.892h-20.529c-.063.659-.101.986-.101 1.371 0 5.146 3.075 7.742 9.061 7.742 3.69 0 7.034-.86 10.732-2.795l-1.721 11.025zm-5.804-26.259c.068-.933.106-1.676.106-2.243 0-3.599-1.828-5.705-4.882-5.705-3.298 0-5.64 2.833-6.594 7.902l11.37.046zm149.86 26.259c-3.568 1.211-6.95 1.797-10.606 1.797-11.527 0-17.56-6.798-17.56-19.765 0-15.146 7.678-26.319 18.059-26.319 8.508 0 13.928 6.246 13.928 16.052 0 3.241-.354 6.417-1.269 10.892h-20.55c-.072.659-.087.986-.087 1.371 0 5.146 3.084 7.742 9.071 7.742 3.693 0 7.022-.86 10.728-2.795l-1.714 11.025zm-5.803-26.259c.046-.933.076-1.676.076-2.243 0-3.599-1.805-5.705-4.879-5.705-3.298 0-5.632 2.833-6.588 7.902l11.391.046zM39.21 86.627c-2.021-1.352-4.757-2.533-8.623-2.533-4.173 0-7.531.865-7.531 5.305 0 7.841 15.216 4.913 15.216 21.704 0 15.294-10.043 19.259-19.128 19.259-4.042 0-8.692-1.337-12.119-2.86l2.467-11.238c2.068 1.878 6.24 3.165 9.652 3.165 3.251 0 8.346-.888 8.346-6.562 0-8.885-15.208-5.58-15.208-21.175 0-14.266 8.884-18.539 17.454-18.539 4.826 0 9.36.708 12.019 2.475L39.21 86.627zm60.781 41.831c-2.129 1.024-4.972 1.698-9.168 1.698-9.022 0-14.617-9.018-14.617-19.997 0-14.369 8.093-25.832 20.004-25.832 2.598 0 6.563 1.124 9.691 2.937l-2.283 10.541c-2.214-1.455-4.519-2.38-6.893-2.38-5.519 0-9.461 5.058-9.461 14.121 0 5.218 2.859 9.498 7.377 9.498 2.689 0 4.581-.567 6.895-1.92l-1.545 11.334zm38.612-11.052c-.53 3.797-1.022 7.483-1.315 11.444h-9.937l.838-7.134h-.101c-3.112 4.849-6.332 8.15-11.958 8.15-6.239 0-9.62-6.565-9.62-15.139 0-2.955.184-4.623.844-9.238l2.813-20.428h11.059l-2.967 20.488c-.3 2.201-.722 4.384-.722 6.661 0 2.582 1.176 5.194 4.158 5.034 4.533 0 7.208-5.545 7.969-12.015l3.052-20.169h10.705l-4.818 32.346zm208.311 10.911h-1.672v-7.32h-2.418v-1.568h6.508v1.568h-2.418v7.32zm11.086 0h-1.562v-7.43h-.022l-1.493 7.43h-1.638l-1.458-7.43h-.023v7.43h-1.558v-8.888h2.438l1.451 7.007h.022l1.425-7.007H358v8.888z"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}
export const LockIcon = ({ }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 20 20"
        >
            <path fill="none" stroke="#999" d="M3.5 8.5H16.5V18.5H3.5z"></path>
            <path
                fill="none"
                stroke="#999"
                d="M6.5 8V4.88C6.5 3.01 8.07 1.5 10 1.5s3.5 1.51 3.5 3.38V8"
            ></path>
        </svg>
    )
}
export const CustomerIcon = ({ color = '#ffff' }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
        >
            <circle
                cx="9.9"
                cy="6.4"
                r="4.4"
                fill="none"
                stroke={color}
                strokeWidth="1.1"
            ></circle>
            <path
                fill="none"
                stroke={color}
                strokeWidth="1.1"
                d="M1.5 19c.8-4.5 4.3-7.8 8.5-7.8s7.7 3.4 8.5 8"
            ></path>
        </svg>
    )
}
export const SettingsIcon = () => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 20 20"
        >
            <circle cx="9.997" cy="10" r="3.31" fill="none" stroke="#000"></circle>
            <path
                fill="none"
                stroke="#000"
                d="M18.488 12.285l-2.283 3.952c-.883-.741-2.02-.956-2.902-.446-.875.498-1.256 1.582-1.057 2.709H7.735c.203-1.126-.182-2.201-1.051-2.709-.883-.521-2.029-.299-2.911.446L1.5 12.285c1.073-.414 1.817-1.286 1.817-2.294-.012-1.011-.744-1.87-1.817-2.275l2.265-3.932c.88.732 2.029.954 2.922.448.868-.51 1.252-1.595 1.048-2.732h4.528c-.191 1.137.178 2.21 1.051 2.72.892.51 2.029.296 2.911-.426l2.262 3.92c-1.083.403-1.826 1.274-1.817 2.295.002 1.009.745 1.871 1.818 2.276h0z"
            ></path>
        </svg>
    )
}
export const LogOutIcon = () => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 20 20"
        >
            <path d="M13.1 13.4L12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5z"></path>
            <path d="M13 2L3 2 3 17 13 17 13 16 4 16 4 3 13 3z"></path>
        </svg>
    )
}
export const FacebookIcon = ({ color = '#fff' }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={color}
        >
            <path d="M11 10h2.6l.4-3h-3V5.3c0-.9.2-1.5 1.5-1.5H14V1.1c-.3 0-1-.1-2.1-.1C9.6 1 8 2.4 8 5v2H5.5v3H8v8h3v-8z"></path>
        </svg>
    )
}
export const TwitterIcon = ({ color = '#fff' }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={color}
        >
            <path d="M19 4.74a7.587 7.587 0 01-2.119.58 3.715 3.715 0 001.622-2.04 7.331 7.331 0 01-2.344.89A3.682 3.682 0 0013.464 3a3.698 3.698 0 00-3.596 4.539 10.482 10.482 0 01-7.614-3.86c-.318.54-.5 1.181-.5 1.86 0 1.281.651 2.411 1.643 3.071a3.654 3.654 0 01-1.674-.461v.04a3.71 3.71 0 002.963 3.631 4.083 4.083 0 01-1.668.06 3.701 3.701 0 003.451 2.569 7.467 7.467 0 01-4.587 1.57 6.44 6.44 0 01-.882-.05 10.439 10.439 0 005.662 1.66c6.792 0 10.508-5.629 10.508-10.5 0-.16-.004-.32-.013-.48A7.533 7.533 0 0019 4.74"></path>
        </svg>
    )
}
export const YoutubeIcon = ({ color = '#fff' }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={color}
        >
            <path d="M15 4.1c1 .1 2.3 0 3 .8.8.8.9 2.1.9 3.1.1 1.2.1 2.9.1 4-.1 1.1 0 2.4-.5 3.4-.5 1.1-1.4 1.5-2.5 1.6-1.2.1-8.6.1-11 0-1.1-.1-2.4-.1-3.2-1-.7-.8-.7-2-.8-3V8.9c0-1.1 0-2.4.5-3.4S3 4.3 4.1 4.2c1.2-.1 8.5-.2 10.9-.1zM8 7.5v6l5.5-3-5.5-3z"></path>
        </svg>
    )
}
export const InstagramIcon = ({ color = '#fff' }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={color}
        >
            <path d="M13.55 1H6.46C3.45 1 1 3.44 1 6.44v7.12c0 3 2.45 5.44 5.46 5.44h7.08c3.02 0 5.46-2.44 5.46-5.44V6.44c.01-3-2.44-5.44-5.45-5.44zm3.95 13c0 1.93-1.57 3.5-3.5 3.5H6c-1.93 0-3.5-1.57-3.5-3.5V6c0-1.93 1.57-3.5 3.5-3.5h8c1.93 0 3.5 1.57 3.5 3.5v8z"></path>
            <circle cx="14.87" cy="5.26" r="1.09"></circle>
            <path d="M10.03 5.45c-2.55 0-4.63 2.06-4.63 4.6 0 2.55 2.07 4.61 4.63 4.61s4.63-2.061 4.63-4.61a4.626 4.626 0 00-4.63-4.6zm.05 7.55c-1.66 0-3-1.34-3-2.99 0-1.65 1.34-2.99 3-2.99s3 1.34 3 2.99c0 1.65-1.34 2.99-3 2.99z"></path>
        </svg>
    )
}
export const PhoneIcon = () => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="w-[15px]"
        >
            <path
                fill="none"
                stroke="#fff"
                strokeWidth="1.01"
                d="M6.189 13.611c1.945 1.914 4.908 4.628 7.678 4.646 2.603.018 4.333-2.016 4.333-2.016l-3.691-3.69-2.97 1.088-5.35-5.349 1.124-2.935L3.76 1.8S1.732 3.537 1.7 6.092c-.033 2.717 2.647 5.646 4.489 7.519"
            ></path>
        </svg>
    )
}
export const EmailIcon = () => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#fff"
            className="w-[15px]"
        >
            <path fill="none" stroke="#fff" d="M1.4 6.5L10 11 18.6 6.5"></path>
            <path d="M1 4v12h18V4H1zm17 11H2V5h16v10z"></path>
        </svg>
    )
}
export const GeolocationIcon = () => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="w-[15px]"
        >
            <path
                fill="none"
                stroke="#fff"
                strokeWidth="1.01"
                d="M10 .5C6.41.5 3.5 3.39 3.5 6.98 3.5 11.83 10 19 10 19s6.5-7.17 6.5-12.02C16.5 3.39 13.59.5 10 .5h0z"
            ></path>
            <circle cx="10" cy="6.8" r="2.3" fill="none" stroke="#fff"></circle>
        </svg>
    )
}
export const WatchIcon = () => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="w-[15px]"
        >
            <circle
                cx="10"
                cy="10"
                r="9"
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
            ></circle>
            <path
                fill="#fff" d="M9 4H10V11H9z"></path>
            <path
                fill="none"
                stroke="#fff"
                strokeWidth="1.1"
                d="M13.018 14.197l-3.573-3.572"
            ></path>
        </svg>
    )
}