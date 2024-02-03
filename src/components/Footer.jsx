import React from "react";

const d = new Date();
let currentYear = d.getFullYear();

function Footer(){
    return <footer>
       {currentYear}
    </footer>
}

export default Footer;