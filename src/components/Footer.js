import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite.js";

function Footer() {
  return (
    <div className="Footer">
      <p>
        Made with <FavoriteIcon fontSize="small" color="primary" /> by Adarsh
      </p>
      <p>Copyright {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
