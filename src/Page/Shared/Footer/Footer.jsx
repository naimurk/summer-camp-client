import logo from '../../../assets/logoTwo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Classes</a>
                    <a className="link link-hover">Instructors</a>
                    <a className="link link-hover">Dashboard</a>
                </div>
                <div>
                    <div className="grid grid-flow-col items-center gap-4">
                        
                        <img className='w-[70px]' src={logo} alt="" />
                        <h1 className='text-3xl font-semibold'>AT Sports</h1>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by AT company</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;