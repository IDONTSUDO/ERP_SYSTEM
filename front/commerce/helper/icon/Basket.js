import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100px",
  className = "",
  viewBox = "0 0 512 512"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <g>
        <path
          d="M501.333,213.331h-90.388L296.792,47.289c-3.333-4.854-9.969-6.073-14.833-2.75c-4.854,3.344-6.083,9.979-2.75,14.833
			l105.846,153.958H126.945L232.792,59.373c3.333-4.854,2.104-11.49-2.75-14.833c-4.833-3.323-11.479-2.104-14.833,2.75
			L101.055,213.331H10.667C4.771,213.331,0,218.102,0,223.998c0,5.896,4.771,10.667,10.667,10.667h13.533l65.207,204.938
			c5.667,17.781,22,29.729,40.656,29.729h251.875c18.656,0,34.99-11.948,40.656-29.74l65.206-204.927h13.534
			c5.896,0,10.667-4.771,10.667-10.667C512,218.102,507.229,213.331,501.333,213.331z M402.26,433.123
			c-2.833,8.896-11,14.875-20.323,14.875H130.063c-9.323,0-17.49-5.979-20.323-14.865L46.589,234.664h418.823L402.26,433.123z"
        />
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);
export default SVG;
