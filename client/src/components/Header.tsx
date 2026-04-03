import bookLogo from "../assets/book-removebg-preview (1).png";

const Header = () => {
    return (
        <div>
            <div className="navbar">
                <img src={bookLogo} alt="logo" className="w-50 h-50"></img>
                <div>
                    <span className="">Home</span>
                    <span className="">Features</span>
                    <span className="">Achievements</span>
                    <span className="">Testimonials</span>
                    <span className="">Pricing</span>
                </div>
                <div>
                    <button>Log In</button>
                    <button>Get Started</button>
                </div>
                

            </div>
        </div>
    )

}

export default Header;