const Navbar = ({ setSection }) => {
  return (
    <nav className="navbar navbar-dark bg-dark p-3 rounded mb-4">
      <button className="btn btn-light me-2" onClick={() => setSection("Home")}>Home</button>
      <button className="btn btn-light me-2" onClick={() => setSection("About")}>About</button>
      <button className="btn btn-light" onClick={() => setSection("Project")}>Project</button>
    </nav>
  );
};

export default Navbar;
