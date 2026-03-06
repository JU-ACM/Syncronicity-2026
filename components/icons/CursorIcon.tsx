
const CursorIcon = ({
  size = 30,
  stroke = "currentColor",
  color = "currentColor",
  className = "",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`${className}`}
    >
      <path
        d="M9.8027 4.63L15.8357 6.99C19.3157 8.352 21.0557 9.033 20.9987 10.113C20.9407 11.193 19.1247 11.689 15.4927 12.679C14.4117 12.974 13.8707 13.121 13.4957 13.496C13.1207 13.871 12.9737 14.412 12.6787 15.493C11.6887 19.125 11.1927 20.941 10.1127 20.999C9.0327 21.057 8.3527 19.316 6.9907 15.836L4.6297 9.803C3.2037 6.159 2.4897 4.338 3.4137 3.414C4.3377 2.491 6.1587 3.204 9.8027 4.63Z"
        fill={color}
        stroke={stroke}
        strokeWidth={strokeWidth}
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CursorIcon;