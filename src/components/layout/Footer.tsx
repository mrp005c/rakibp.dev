

const Footer = () => {

  return (
    <footer className="bg-gray/50 min-h-8 p-2  border border-gray/20 box-border text-center text-xs text-black/60">
      <div className="flex-center flex-wrap">
        &copy; {new Date().getFullYear()} | Designed & Coded with ❤️️
        <a href="mailto:mrp005c@gmail.com">Muhammad Rakib</a>
      </div>
    </footer>
  );
};

export default Footer;
