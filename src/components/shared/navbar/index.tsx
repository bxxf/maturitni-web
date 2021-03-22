import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import NavbarButton from '@/components/core/navbar/button';
import Logo from '@/components/core/navbar/logo';

const NavbarWrapper = styled.div`
  ${tw`flex flex-row justify-between border-b border-navbar-border items-center px-2 py-2`}
  margin: 0 12%
`;

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Logo src="/img/logo.svg" alt="TvůjDezert Logo" height="40" width="40" />
      <div className="flex items-center">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <NavbarButton
              onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Přepnout theme"
            >
              {theme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  style="-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg)"
                >
                  <g fill="#fff">
                    <path d="M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zM4.3 4.3a1 1 0 0 1 1.4 0l1 1a1 1 0 0 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4zm14 0a1 1 0 1 1 1.4 1.4l-1 1a1 1 0 1 1-1.4-1.4l1-1zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0zm-5 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm17 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM6.7 17.3a1 1 0 0 1 0 1.4l-1 1a1 1 0 0 1-1.4-1.4l1-1a1 1 0 0 1 1.4 0zm10.6 0a1 1 0 0 1 1.4 0l1 1a1 1 0 0 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4zM12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1z" />
                  </g>
                  <rect width="24" height="24" fill="rgba(0, 0, 0, 0)" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                >
                  <g fill="#333333">
                    <path d="M10.005 2.242a1 1 0 0 1 .321.988c-.594 2.518-.809 5.709.454 7.934c.607 1.07 1.576 1.955 3.124 2.454c1.576.509 3.802.632 6.91.046a1 1 0 0 1 1.114 1.356c-1.51 3.757-4.863 6.98-9.399 6.98C6.714 22 2 17.286 2 11.47c0-4.536 3.223-7.888 6.98-9.398a1 1 0 0 1 1.025.17zm-2 2.56C5.642 6.282 4 8.637 4 11.47A8.53 8.53 0 0 0 12.53 20c2.86 0 5.233-1.673 6.712-4.075c-2.4.27-4.362.11-5.952-.403c-2.028-.655-3.396-1.869-4.25-3.37c-1.265-2.23-1.344-4.999-1.034-7.35z" />
                  </g>
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    fill="rgba(0, 0, 0, 0)"
                  />
                </svg>
              )}
            </NavbarButton>
          )}
        </ThemeToggler>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
