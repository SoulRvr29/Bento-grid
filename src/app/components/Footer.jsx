const Footer = () => {
  return (
    <footer className="absolute mx-auto w-full left-0 bottom-0 text-center font-bold text-base text-Rose500 p-4 max-lg:p-4 max-lg:text-xs  border-t-2 border-Rose100">
      Challenge by
      <a
        className="text-purple-500 ml-1 hover:text-yellow-500 hover:underline"
        href="https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        className="text-purple-500 hover:text-yellow-500 ml-1 hover:underline"
        href="https://www.frontendmentor.io/profile/SoulRvr29"
        target="_blank"
      >
        Paweł Chudecki
      </a>
      .
    </footer>
  );
};

export default Footer;
