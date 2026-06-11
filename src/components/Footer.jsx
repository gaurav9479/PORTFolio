import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">GP<span className="footer__logo-dot">.</span></span>
          <span className="footer__copy">© {year} Gaurav Prajapati. All rights reserved.</span>
        </div>
        <div className="footer__links">
          <a href="https://github.com/gaurav9479" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/gaurav-prajapati-5194902a3/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:gauravphb@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
