/**
 * NavItems Component - Renders individual navigation menu items
 * @param {string} point - The section identifier for the navigation link
 * @param {JSX.Element} icon - The icon component to display
 * @param {function} onClick - Callback function when the link is clicked
 * @returns {JSX.Element} Navigation list item
 */
const NavItems = ({ point, icon, onClick }) => {
  const capitalizedPoint = point.charAt(0).toUpperCase() + point.slice(1);

  return (
    <li className="nav__item">
      <a href={`#${point}`} className="nav__link" onClick={onClick}>
        {icon}
        <span className="nav__name">{capitalizedPoint}</span>
      </a>
    </li>
  );
};

export default NavItems;
