const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content justify-center grid-cols-4">
      <nav>
        <h1 className="footer-title text-2xl">ABOUT US</h1>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover"></a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h1 className="footer-title text-2xl">CONTACT US</h1>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h1 className="footer-title text-2xl">Legal</h1>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <div>
        <h1 className="footer-title text-2xl">SUBSCRIBE</h1>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="example@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">+</button>
          </div>
        </fieldset>
      </div>
    </footer>
  );
};
export default Footer;
