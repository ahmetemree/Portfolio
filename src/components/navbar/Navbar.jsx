import "./navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <div className="wrapper">
            <span>Ahmet Emre Çakmak</span>
            <div className="social">
                <a href="#"><img src="/linkedin.png" alt="" /></a>
                <a href="#"><img src="/github.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar