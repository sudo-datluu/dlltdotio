const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-7 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
  
        <div className="flex gap-3">
          <a href="https://github.com/sudo-datluu" className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          <a href="https://linkedin.com/in/dllt/" className="social-icon">
            <img src="/assets/linkedin.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
        </div>
  
        <p className="text-white-500">Made by David Luu.</p>
      </footer>
    );
  };
  
  export default Footer;