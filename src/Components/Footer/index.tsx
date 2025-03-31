import styles from './footer.module.scss';
const Footer = () => {
  return (
    <footer className={`${styles["footer"]} text-white py-4 mt-8`}>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kento Yokozuka All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;