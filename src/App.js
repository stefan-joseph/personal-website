import { useState } from "react";
import styled from "styled-components";

import NavMenu from "./components/NavMenu";
import Navbar from "./components/Navbar";
import Arrow from "./components/Arrow";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Hr from "./components/HorizontalBreak";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menu, showMenu] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Div>
        {menu && (
          <NavMenu
            menu={menu}
            onShowMenu={() => showMenu(false)}
            darkMode={darkMode}
            onDarkMode={() => setDarkMode(!darkMode)}
          />
        )}
        <Navbar onShowMenu={() => showMenu(true)} />
        <div className="content">
          <div className="left"></div>
          <div className="center">
            <Profile
              darkMode={darkMode}
              onDarkMode={() => setDarkMode(!darkMode)}
            />
            <Hr />
            <Projects />
            <Hr />
            <ContactMe />
          </div>
          <div className="right">
            <Arrow />
          </div>
        </div>
      </Div>
    </ThemeProvider>
  );
}

export default App;

const Div = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;

  .content {
    display: flex;
    width: 100%;
    .left {
      flex: 1;
    }
    .center {
      display: flex;
      flex-direction: column;
      flex: 12;
    }
    .right {
      width: 80px;
      flex: 1.2;
      @media screen and (max-width: 680px) {
        flex: 1;
      }
    }
  }
`;
