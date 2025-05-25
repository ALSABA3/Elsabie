const NavItems = ({ point, icon, onClick }) => {
  return (
    <li className="nav__item">
      <a href={`#${point}`} className="nav__link" onClick={onClick}>
        {icon}
        <span className="nav__name">
          {point.charAt(0).toUpperCase() + point.slice(1)}
        </span>
      </a>
    </li>
  );
};

export default NavItems;
