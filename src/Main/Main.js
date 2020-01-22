import React from "react";
import "./Main.css"

import DevItem from "../DevItem"

function Main( {devs} ){

	return (
		<main>
			<ul>
        {devs.map(dev => <DevItem dev={dev} key={dev._id}></DevItem>)}
			</ul>
		</main>
	);
}

export default Main;