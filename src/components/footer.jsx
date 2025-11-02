import PropTypes from "prop-types";

export default function Footer({ text, links = [], className = "" }) {
  return (
    <footer
      className={`bg-white dark:bg-gray-800 shadow mt-auto ${className}`}
    >
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        {/* Optional links */}
        {links.length > 0 && (
          <div className="mb-2 space-x-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Footer text */}
        <p className="text-gray-500 dark:text-gray-400">
          {text || `© ${new Date().getFullYear()} PLP Task Manager. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  text: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};
