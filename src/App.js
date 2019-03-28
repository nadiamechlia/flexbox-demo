import React, { Component } from 'react';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="flx">
				{/* EXAMPLE # 1: Child item in the centre of the parent */}
				<div className="flx__example-one">
					<span className="flx__title">EXAMPLE # 1: Child item in the centre of the parent</span>
					<div className="flx__example-one__parent">
						<div className="flx__example-one__parent__child" />
					</div>
				</div>

				{/* EXAMPLE # 2: Set for each child item its width */}
				<div className="flx__example-two">
					<span className="flx__title">EXAMPLE # 2: Set for each child item its width</span>
					<div className="flx__example-two__parent">
						<div className="flx__example-two__parent__child-one" />
						<div className="flx__example-two__parent__child-two" />
						<div className="flx__example-two__parent__child-three" />
					</div>
				</div>

				{/* EXAMPLE # 3: The utility of 'flex-wrap' */}
				<div className="flx__example-three">
					<span className="flx__title">EXAMPLE # 3: The utility of 'flex-wrap'</span>
					<div className="flx__example-three__parent">
						<div className="flx__example-three__parent__child-one" />
						<div className="flx__example-three__parent__child-two" />
						<div className="flx__example-three__parent__child-three" />
					</div>
				</div>

				{/* EXAMPLE # 4: It's easy to set a direction to children */}
				<div className="flx__example-four">
					<span className="flx__title">EXAMPLE # 4: It's easy to set a direction to children</span>
					<div className="flx__example-four__parent">
						<div className="flx__example-four__parent__child-one" />
						<div className="flx__example-four__parent__child-two" />
						<div className="flx__example-four__parent__child-three" />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
