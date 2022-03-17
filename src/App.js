import { useEffect,useState } from "react";
import Header from "./components/header";
import theme from "./constants/theme";

import { createGlobalStyle,ThemeProvider } from "styled-components";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Background from "./components/containers";
import Register from "./components/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import Reset from "./components/Reset";
import { useDispatch,useSelector } from "react-redux";




const GlobalStyles = createGlobalStyle`
* {
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: "Josefin Sans";
  box-sizing: border-box;
}

`;



function App() {
  const mode = useSelector((state) => state.darkMode)
  const [ curTheme,setCurTheme ] = useState("light")

  useEffect(() => {
    setCurTheme(mode ? "dark" : "light")
  },[ mode ])

  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch({ type: "changeTheme" })
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Background
          backgroundColor={theme[ curTheme ][ 1 ]}
          backgroundImage={theme[ curTheme ].imgMoblie}
          backgroundImageDesktop={theme[ curTheme ].imgDesktop}
        >
          <Header changeTheme={changeTheme} img={theme[ curTheme ].themeIcon} />

          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/reset" element={<Reset />} />
              <Route exact path="/dashboard" element={<Dashboard />} />

              <Route exact path="/home" element={<Home curTheme={curTheme} />} />
            </Routes>

          </BrowserRouter>

        </Background>
      </ThemeProvider>
    </>
  );
}

export default App;
