import React from "react";

const SVG = ({
    style = {},
    fill = "#000",
    width = "100",
    height = "75",
    className = "",
    viewBox = "0 0 76 46"
}) => (
        <svg
            width={width}
            style={style}
            height={height}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            className={`svg-icon logo_main_b ${className || ""}`}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >

            {/* <svg width="76" height="46" viewBox="0 0 76 46" fill="none" xmlns="http://www.w3.org/2000/svg"> */}

            <path d="M35.6477 0.644085C29.9727 1.35314 24.995 3.71666 21.2344 7.48516C20.1678 8.56187 18.5405 10.6234 17.8021 11.8445C17.1457 12.9344 16.4346 14.3394 16.4346 14.5626C16.4346 14.6939 18.0345 14.7333 23.9831 14.7333H31.5179L31.9829 14.3919C32.7213 13.8535 34.6358 13.0526 35.7298 12.8162C37.0289 12.5405 39.4357 12.5405 40.6801 12.8162C41.8561 13.0788 43.3193 13.6697 44.2492 14.2737L44.974 14.7333H52.5225C56.666 14.7333 60.0574 14.707 60.0574 14.6676C60.0574 14.6282 59.7428 13.998 59.3599 13.2495C55.8865 6.6054 49.8286 2.23289 42.1843 0.880438C40.6801 0.604693 39.969 0.552171 38.2049 0.565301C37.0289 0.578433 35.8802 0.617824 35.6477 0.644085ZM41.5279 3.88736C46.6423 4.76711 50.9636 7.18315 54.0951 10.9516C54.8883 11.9102 56.1737 13.8141 56.2558 14.1818C56.2968 14.3656 55.4079 14.5101 55.1618 14.3525C55.1071 14.3131 54.7652 13.8535 54.4233 13.3546C53.849 12.4879 52.167 10.4002 52.0439 10.4002C52.0166 10.4002 51.8661 10.6365 51.7157 10.9123C51.5653 11.2011 51.2097 11.5951 50.9226 11.792L50.3892 12.1597L51.0867 13.0263C51.4696 13.499 51.8251 13.906 51.8661 13.9454C51.9208 13.9848 51.9892 14.0899 52.0166 14.1949C52.0439 14.3131 51.8798 14.3787 51.4696 14.405C50.9226 14.4313 50.8542 14.3919 50.3072 13.7616C49.5141 12.8425 48.8987 12.2516 48.0919 11.6476C47.7226 11.3587 47.3808 11.0961 47.3397 11.0567C47.162 10.8729 45.8082 10.1113 44.9466 9.70424C42.745 8.66691 40.7758 8.24673 38.1776 8.24673C35.4836 8.24673 33.5692 8.68005 31.2718 9.78302C29.5488 10.6103 28.6462 11.2537 27.0052 12.8425C25.6514 14.1555 25.4053 14.3394 24.913 14.3919C24.5985 14.4313 24.366 14.405 24.366 14.3262C24.366 14.1687 24.913 13.4333 25.5694 12.7243L26.0343 12.2122L25.5967 11.9102C25.3643 11.7395 24.9677 11.3587 24.7352 11.0436L24.3113 10.4921L23.6412 11.188C23.2857 11.5688 22.5883 12.4485 22.1096 13.1445L21.2481 14.4181L20.6601 14.3919C20.3319 14.3787 20.0584 14.3525 20.0721 14.3262C20.1405 14.103 20.8105 12.9475 21.2618 12.3041C24.1609 8.15482 29.0428 4.99033 34.0615 4.03179C36.5503 3.54596 39.2442 3.49344 41.5279 3.88736ZM24.2976 12.5798C24.5438 12.8162 24.4754 13.4071 24.1882 13.5778C23.7369 13.8535 22.9985 13.5515 22.9985 13.0919C22.9985 12.4223 23.8053 12.1071 24.2976 12.5798ZM53.0285 12.4748C53.5618 12.8293 53.2199 13.6828 52.5362 13.6828C51.9482 13.6828 51.6063 12.9212 52.0166 12.5273C52.1943 12.3566 52.796 12.3172 53.0285 12.4748Z" fill="#01628F" />
            <path d="M35.842 4.05906C35.4727 4.15097 35.1309 5.07012 35.1309 5.94987C35.1445 6.58014 35.2266 6.85589 35.5411 7.35485L35.924 7.95886L38.1804 7.91947C40.423 7.89321 40.4367 7.89321 40.7239 7.55181C41.0657 7.17102 41.3256 6.40945 41.3256 5.84483C41.3256 5.1489 40.9153 4.21663 40.5461 4.08532C40.2179 3.96714 36.2795 3.94088 35.842 4.05906ZM36.8949 5.87109C36.8949 7.39424 36.8129 7.52555 36.1975 6.92154C35.6232 6.38318 35.7326 5.1489 36.3889 4.66307C36.8265 4.34793 36.8812 4.47924 36.8949 5.87109Z" fill="#01628F" />
            <path d="M33.4617 5.28057C32.5045 5.51692 30.4943 6.22598 30.1251 6.4492C29.961 6.55424 29.9883 6.64616 30.2755 6.97442C30.4669 7.18451 30.7404 7.64409 30.8635 7.97235C31.0003 8.30062 31.137 8.56323 31.178 8.56323C31.2054 8.56323 31.684 8.40566 32.2173 8.22184C32.7506 8.02488 33.5848 7.77539 34.0771 7.64409C34.7061 7.48652 34.9523 7.36834 34.9113 7.23704C34.8702 7.13199 34.8292 6.59363 34.7882 6.02902C34.7472 5.38561 34.6788 5.01796 34.5694 5.03109C34.4873 5.03109 33.9814 5.14926 33.4617 5.28057ZM33.2566 6.4492C33.4617 6.82999 33.4207 7.13199 33.1609 7.32895C32.8327 7.5653 32.4361 7.55217 32.1353 7.28956C31.643 6.85625 31.9438 6.19972 32.6412 6.19972C32.9694 6.19972 33.1609 6.2785 33.2566 6.4492Z" fill="#01628F" />
            <path d="M41.7073 5.50198C41.7483 5.97469 41.6116 6.77566 41.4065 7.26149C41.3244 7.43219 41.4338 7.48471 41.9398 7.55036C42.6235 7.64228 44.5927 8.25942 44.8115 8.44325C45.044 8.65334 45.1397 8.56142 45.55 7.79985C45.7688 7.37967 46.0423 6.95948 46.1653 6.86757C46.5072 6.59183 46.4388 6.49991 45.7414 6.19791C45.0713 5.90903 42.7876 5.22624 42.0765 5.0818C41.6663 5.00302 41.6526 5.01615 41.7073 5.50198ZM44.2508 6.408C44.7158 6.85444 44.3602 7.51097 43.6355 7.51097C43.1158 7.51097 42.8423 7.02514 43.0748 6.52617C43.2663 6.14538 43.909 6.0666 44.2508 6.408Z" fill="#01628F" />
            <path d="M27.2262 7.092C25.5442 8.16871 24.5049 9.04847 24.5049 9.42926C24.5049 10.2696 25.2707 11.3332 26.1869 11.7796C26.5698 11.9635 26.9527 12.1079 27.0347 12.1079C27.1168 12.1079 27.5134 11.8453 27.8962 11.517C28.2928 11.2019 29.0723 10.6504 29.633 10.309L30.6586 9.67874V8.95655C30.6586 8.37881 30.5765 8.11619 30.2757 7.68288C29.7287 6.89504 28.9629 6.30416 28.4979 6.33042C28.4432 6.34355 27.8689 6.67182 27.2262 7.092ZM26.1595 9.42926C26.3236 9.75752 26.6929 10.204 26.98 10.4272C27.3903 10.7423 27.4723 10.8736 27.3629 11.0181C26.939 11.5039 25.7766 10.8999 25.4758 10.0464C25.3117 9.61309 25.3117 9.42926 25.4348 9.16664C25.6672 8.68081 25.8313 8.74646 26.1595 9.42926Z" fill="#00638E" />
            <path d="M47.1361 6.63121C46.8352 6.78877 46.3839 7.20895 46.1515 7.56348C45.7822 8.07558 45.7002 8.32506 45.7002 8.90281C45.7002 9.57247 45.7139 9.61186 46.2882 9.96639C46.6027 10.1765 47.0403 10.426 47.2455 10.531C47.4506 10.6229 47.9976 11.03 48.4352 11.4239C49.2146 12.0936 49.2693 12.1198 49.7069 11.9885C50.8009 11.634 51.7171 10.4785 51.7171 9.4543C51.7035 8.92907 51.6488 8.85029 50.9513 8.31193C50.0078 7.58974 48.0249 6.3292 47.8335 6.3292C47.7514 6.3292 47.4369 6.46051 47.1361 6.63121ZM48.4352 7.24835C48.5993 7.35339 48.5446 7.47157 48.0659 7.93114C47.7514 8.24628 47.3959 8.71898 47.2865 8.98159C47.0267 9.57247 46.8762 9.66439 46.6574 9.4149C46.3976 9.1129 46.5617 8.07558 46.9446 7.68166C47.4506 7.16956 48.0249 6.99886 48.4352 7.24835Z" fill="#01628F" />
            <path d="M6.45392 16.7573C5.26421 17.0068 3.73263 17.7947 2.93948 18.5562C2.54291 18.937 2.21472 19.2916 2.21472 19.3441C2.21472 19.3966 2.13267 19.5279 2.03694 19.6198C1.43525 20.1976 0.751507 22.9156 0.901931 24.0974C1.33953 27.2225 2.91213 29.0082 5.90693 29.783C7.19236 30.1112 9.68119 30.0718 10.6795 29.7173C11.5273 29.4153 11.6777 29.2577 11.5136 28.8507C11.4589 28.7062 11.3632 28.1679 11.3085 27.6821C11.2128 26.8548 11.1854 26.8023 10.9119 26.8811C10.7615 26.9205 9.94101 26.9861 9.10685 27.0387C7.21971 27.1306 6.45392 26.9336 5.56506 26.0932C4.77192 25.3317 4.48474 24.4388 4.56679 22.955C4.66252 21.1955 5.30523 20.2764 6.85049 19.7117C7.71201 19.4097 9.28462 19.3703 10.2008 19.6461C10.5701 19.7643 10.9393 19.8562 11.035 19.8562C11.2264 19.8562 11.8145 17.3482 11.6504 17.1907C11.5957 17.125 11.0897 16.9674 10.5427 16.823C9.40769 16.5341 7.62996 16.5079 6.45392 16.7573Z" fill="#EA4E37" />
            <path d="M57.0646 16.7808C54.1382 17.5293 52.2374 20.116 52.2237 23.333C52.21 26.9308 54.2613 29.4388 57.6389 29.964C59.9226 30.3054 62.7944 29.1499 63.9567 27.4035C64.9003 25.9854 65.1738 24.9875 65.1601 23.1754C65.1328 20.4968 63.9157 18.304 61.8782 17.3192C60.4013 16.597 58.5688 16.3869 57.0646 16.7808ZM59.991 19.6433C61.044 20.2473 61.7004 21.6654 61.7004 23.3593C61.7004 25.749 60.4833 27.3247 58.6782 27.2591C58.268 27.2459 57.7347 27.1409 57.5022 27.0227C56.8185 26.6945 56.1074 25.7359 55.8475 24.843C55.8202 24.738 55.7928 24.0552 55.7792 23.333C55.7655 21.7836 56.08 20.8382 56.8595 20.0766C57.6526 19.2756 59.0064 19.0918 59.991 19.6433Z" fill="#EA4E37" />
            <path d="M15.2729 16.7825C15.1224 16.8088 14.6438 16.8613 14.2199 16.9007L13.4268 16.9795V23.3347V29.6899L14.2199 29.795C14.6438 29.8475 16.0523 29.9 17.3241 29.9C20.8932 29.9 22.4932 29.5061 23.7239 28.3506C24.2572 27.8385 24.5034 27.484 24.6812 26.9325C24.982 26.0002 24.9683 25.7901 24.6401 24.8841C24.3119 23.9781 23.929 23.571 22.9171 23.0852L22.1513 22.7176L22.5752 22.4681C22.8214 22.3236 23.0402 22.2186 23.0675 22.2186C23.1906 22.2186 23.6966 21.6802 24.0384 21.2075C24.476 20.5773 24.5034 19.343 24.0795 18.6733C23.1633 17.1896 21.5359 16.6906 17.7754 16.7168C16.5446 16.73 15.4233 16.7562 15.2729 16.7825ZM19.5668 19.2773C20.9069 19.5399 21.071 21.0237 19.8129 21.5358C19.6078 21.6277 18.9104 21.6934 18.2813 21.6934H17.119V20.5247C17.119 19.7106 17.1737 19.3298 17.2967 19.2905C17.5429 19.1854 19.0608 19.1854 19.5668 19.2773ZM20.0317 24.4902C20.6197 24.7397 20.9479 25.173 20.9479 25.7376C20.9479 26.8406 20.1001 27.3395 18.2403 27.3395H17.119V25.8558C17.119 25.0286 17.16 24.3195 17.2284 24.267C17.3788 24.1094 19.4847 24.2801 20.0317 24.4902Z" fill="#EA4E37" />
            <path d="M41.6399 16.8353C41.1066 16.8879 40.6006 16.9798 40.5186 17.0192C40.4092 17.0848 40.3682 19.0413 40.3682 23.4007V29.7034L40.6827 29.769C40.8468 29.8084 41.6946 29.8216 42.5561 29.8084L44.1287 29.769L44.1561 27.6287L44.1834 25.5016L45.6603 25.4359C48.2996 25.344 50.1047 24.5168 50.8568 23.0724C52.0191 20.8402 51.2123 18.306 49.038 17.3474C47.6569 16.7434 44.621 16.5333 41.6399 16.8353ZM46.5355 19.4615C47.2193 19.6453 47.6295 20.118 47.7116 20.8139C47.7799 21.3129 47.7252 21.4836 47.4107 21.8906C46.8774 22.5603 46.6039 22.6654 45.3321 22.7441L44.2108 22.8098L44.1698 21.1291C44.1424 20.1968 44.1561 19.409 44.1834 19.3827C44.2928 19.2776 46.0569 19.3302 46.5355 19.4615Z" fill="#EA4E37" />
            <path d="M29.0994 18.3723C28.8122 19.2258 28.4977 20.1581 28.402 20.447C28.3062 20.7359 28.0874 21.3793 27.9233 21.8914C27.4584 23.3751 26.1593 27.3143 25.7354 28.5223C25.2704 29.8617 25.202 29.8091 27.2396 29.8223C29.1541 29.8354 29.2088 29.8091 29.4002 29.0738C29.4959 28.7324 29.6737 28.0496 29.8105 27.5638L30.0566 26.6709H32.0805C33.1882 26.6578 34.118 26.6841 34.1454 26.7103C34.1591 26.7234 34.3779 27.3668 34.624 28.1284C34.8702 28.89 35.13 29.5859 35.212 29.6778C35.3214 29.8091 35.8137 29.8485 37.2086 29.8223C38.2342 29.8091 39.1094 29.7829 39.1504 29.7566C39.1914 29.7304 38.8085 28.5092 38.2889 27.0517C37.7692 25.5811 37.2222 24.0317 37.0855 23.5983C36.9487 23.165 36.3607 21.4712 35.7727 19.8167L34.7061 16.8361H32.1625H29.6053L29.0994 18.3723ZM32.6412 21.0379C32.9147 21.9439 33.2292 22.9024 33.3386 23.1782C33.6941 24.071 33.6941 24.071 32.1352 24.0317C30.7267 23.9923 30.7267 23.9923 30.7404 23.664C30.7814 23.0731 31.9301 19.1864 32.0395 19.2915C32.0942 19.344 32.3677 20.1319 32.6412 21.0379Z" fill="#EA4E37" />
            <path d="M66.4863 23.2697V29.7038L66.8145 29.7826C67.4162 29.927 70.1102 29.7826 70.1238 29.5987C70.1375 29.5199 70.1512 27.2483 70.1649 24.5828L70.1785 19.7245H72.9819H75.7852V18.2801V16.8357H71.1358H66.4863V23.2697Z" fill="#EA4E37" />
            <path d="M16.5742 32.0798C16.5742 32.1586 16.834 32.7101 17.1486 33.2879C19.9793 38.5926 24.7108 42.5712 30.4542 44.4883C33.3533 45.4731 35.4865 45.7751 38.8506 45.6832C42.283 45.6044 44.2932 45.1974 47.4657 43.9237C52.3613 41.9935 56.6826 38.0937 59.1988 33.3798C59.5133 32.7626 59.7868 32.198 59.7868 32.1061C59.7868 31.9748 58.2005 31.9354 52.1699 31.9354H44.5667L43.1855 32.5788C41.312 33.4586 40.1634 33.708 38.1121 33.6949C36.1293 33.6818 34.8712 33.3929 33.0798 32.5263L31.8901 31.9354H24.2321C18.7622 31.9354 16.5742 31.9748 16.5742 32.0798ZM26.3654 32.8414C29.3876 36.321 34.1601 38.3038 38.9326 38.0674C39.7668 38.028 40.8744 37.9099 41.3941 37.7917C44.4573 37.1614 47.6982 35.3888 49.6537 33.2747C50.4742 32.3687 50.5426 32.3293 51.1169 32.3293C51.4451 32.3293 51.7186 32.3818 51.7186 32.4475C51.7186 32.5132 51.4314 32.8939 51.0896 33.2879L50.4742 34.0232L51.1443 34.6535C51.5135 34.9948 51.8827 35.4019 51.9784 35.5463C52.1152 35.7958 52.1699 35.7696 52.7442 35.1524C53.3869 34.4696 54.7271 32.6313 54.7271 32.4475C54.7271 32.3818 55.0416 32.3293 55.4108 32.3293C55.7937 32.3293 56.0946 32.3687 56.0946 32.4212C56.0946 32.8152 54.1801 35.3625 52.963 36.5837C49.9819 39.5643 46.4675 41.4289 42.0778 42.3349C40.2727 42.7025 36.4301 42.7419 34.5567 42.3874C30.2217 41.5864 26.1876 39.4593 23.2475 36.413C22.4271 35.5463 20.2664 32.6707 20.2664 32.4212C20.2664 32.3687 20.5673 32.3293 20.9365 32.3293C21.5929 32.3293 21.6202 32.3425 21.9895 32.9465C22.6048 33.9707 24.0817 35.7433 24.3142 35.7433C24.3826 35.7433 24.574 35.5201 24.7518 35.2443C24.9296 34.9817 25.2851 34.6009 25.5313 34.4171L25.9962 34.0757L25.3125 33.2747C24.9432 32.8414 24.6424 32.4475 24.6424 32.4081C24.6424 32.3162 25.3672 32.2505 25.6817 32.3293C25.8458 32.3687 26.1466 32.5919 26.3654 32.8414ZM24.3005 32.7232C24.615 33.0515 24.4783 33.603 24.027 33.8C23.3159 34.102 22.6595 33.1959 23.2202 32.6707C23.5074 32.3818 23.9997 32.4081 24.3005 32.7232ZM53.1955 32.8808C53.4143 33.3404 53.2228 33.7343 52.7305 33.8525C52.2929 33.9575 51.8554 33.5899 51.8554 33.104C51.8554 32.395 52.8673 32.2374 53.1955 32.8808Z" fill="#01628F" />
            <path d="M26.4741 34.3515C25.4484 34.7848 24.5049 36.0191 24.5049 36.9383C24.5049 37.0564 24.8194 37.4372 25.216 37.7786C26.1048 38.5402 28.3065 39.9452 28.6073 39.9452C28.9492 39.9452 29.9475 39.2099 30.2483 38.724C30.6312 38.1463 30.8363 37.3716 30.7269 36.9514C30.6586 36.6888 30.3304 36.3999 29.5236 35.9009C28.9082 35.5202 28.1287 34.9687 27.8005 34.6929C27.1305 34.1152 27.0894 34.102 26.4741 34.3515ZM29.8107 37.0302C30.0159 37.5817 29.8654 38.0806 29.3321 38.5796C28.9902 38.9079 28.7578 39.026 28.4022 39.026C28.1561 39.026 27.9099 38.9735 27.8689 38.921C27.8279 38.8553 28.0467 38.5796 28.3338 38.3039C28.6347 38.015 28.9766 37.5423 29.0996 37.2271C29.3595 36.5706 29.6193 36.505 29.8107 37.0302Z" fill="#01628F" />
            <path d="M48.23 34.9573C47.7104 35.3906 46.9173 35.929 46.4933 36.1653C45.7275 36.5855 45.7139 36.6118 45.7002 37.1632C45.7002 37.4652 45.7822 37.9117 45.8916 38.1612C46.1515 38.7783 46.9173 39.5661 47.4643 39.7762C47.9018 39.9601 47.9565 39.9469 48.7634 39.4742C49.7343 38.8965 50.9377 38.0299 51.4847 37.5178C52.0727 36.94 51.9359 36.0603 51.0881 35.1017C50.7052 34.6684 49.789 34.1695 49.3924 34.1826C49.283 34.1826 48.7634 34.5371 48.23 34.9573ZM50.418 35.5219C50.9513 36.034 51.1291 36.5461 50.9513 37.0319C50.7599 37.5703 50.5137 37.5178 50.2266 36.9006C50.0898 36.5855 49.748 36.1259 49.4745 35.8896C48.8454 35.2987 48.8454 35.0886 49.4745 35.0886C49.8437 35.0886 50.0761 35.1936 50.418 35.5219Z" fill="#01628F" />
            <path d="M30.9592 38.2125C30.8772 38.4882 30.59 38.9478 30.3302 39.2367L29.8516 39.775L30.9182 40.1952C31.9028 40.5891 34.2138 41.2588 34.5694 41.2588C34.6651 41.2588 34.7608 40.8911 34.8019 40.3003C34.8429 39.7882 34.8976 39.2498 34.9249 39.1054C34.9523 38.9084 34.8019 38.8296 34.0087 38.6195C33.4891 38.4882 32.6412 38.2387 32.1216 38.0549C31.6156 37.858 31.178 37.7135 31.1507 37.7135C31.137 37.7135 31.0413 37.9367 30.9592 38.2125ZM33.2976 39.0397C33.4891 39.3417 33.2976 39.9195 32.9694 40.0114C32.2447 40.2346 31.684 39.6437 32.0259 39.0134C32.1489 38.8034 32.2857 38.764 32.6686 38.7902C32.9421 38.8165 33.2156 38.9215 33.2976 39.0397Z" fill="#01628F" />
            <path d="M43.8555 38.1852C43.1854 38.4216 42.3512 38.6579 42.0367 38.6973C41.5034 38.7892 41.4487 38.8286 41.5308 39.0781C41.5718 39.2226 41.6538 39.7872 41.6949 40.2993C41.7769 41.2447 41.7769 41.2578 42.1324 41.179C43.4589 40.8901 44.2521 40.6538 45.3187 40.2467L46.5358 39.7872L46.1802 39.3407C45.9751 39.0912 45.7016 38.6185 45.5512 38.3034C45.4007 37.9751 45.2366 37.7257 45.1819 37.7257C45.1272 37.7388 44.5392 37.9358 43.8555 38.1852ZM44.1153 38.8024C44.4162 39.0125 44.3751 39.7872 44.0469 39.9841C43.7324 40.168 43.1307 39.9841 43.035 39.669C42.8982 39.2882 43.0623 38.7892 43.3495 38.7236C43.7598 38.6185 43.8692 38.6317 44.1153 38.8024Z" fill="#01628F" />
            <path d="M35.8286 38.5514C35.1449 39.0503 34.9534 40.8098 35.4868 41.7158C35.7876 42.2411 35.8013 42.2411 36.8132 42.333C37.7841 42.4118 39.8217 42.3592 40.4644 42.2279C41.1618 42.0966 41.5584 40.3371 41.1208 39.3261C40.6969 38.3675 40.7106 38.3675 38.2628 38.3675C36.6491 38.3807 35.9927 38.42 35.8286 38.5514ZM40.1362 39.2604C40.902 40.0745 40.6695 41.4138 39.6986 41.7158C39.3841 41.8078 39.3704 41.7946 39.4798 41.3088C39.6166 40.626 39.6302 40.1139 39.4935 39.5099C39.3978 39.0766 39.4114 39.0241 39.6439 39.0241C39.7943 39.0241 40.0131 39.1291 40.1362 39.2604Z" fill="#01628F" />
        </svg>


    );
export default SVG;