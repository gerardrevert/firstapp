import React from "react";

// Layouts
import Nav from "./component/Nav";
import Footer from "./component/Footer";

import { BrowserRouter } from "react-router-dom";

// Import FontAwesome library globally.
import { library } from '@fortawesome/fontawesome-svg-core'

// Import FontAwesome icons globally.
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


import "./style/App.css";

function App() {
    return (
        <BrowserRouter>
            <Nav></Nav>
            <Footer></Footer>
        </BrowserRouter>
    );
}

export default App;

// adding icons we want to use in library.
library.add(fab, fas, far)
