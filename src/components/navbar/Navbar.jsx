import "./navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <div className="wrapper">
            <span>Ahmet Emre Çakmak</span>
            <div className="social">
                <a href="https://www.linkedin.com/in/ahmet-emre-%C3%A7akmak-46092b240/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://github.com/ahmetemree"><img src="/github.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar