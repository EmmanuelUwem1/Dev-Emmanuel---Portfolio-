function HamburgerMenu(props) {
  return (
    <div
      className={`hamburger-menu z-[2000] flex flex-col justify-between h-8 px-1 py-1 w-9 ${props.state ? "hamburger-open" : ""}`}
      onClick={props.onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default HamburgerMenu;