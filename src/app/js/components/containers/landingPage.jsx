import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
//svgs
import RitualMapLogo from '../../../svg/RitualMapLogo.svg';
import Pen from '../../../svg/pen.svg';
import Notebook from '../../../svg/notebook.svg';
import Phone from '../../../svg/iPhone5s.svg';
import Earpods from '../../../svg/earpods.svg';

export class LandingPage extends Component {
	constructor() {
		super();

		this.stateFromOffset = (offset) => {
			return {
				penStyle: {
					transform: 'rotate(-30deg) translateY(-' + offset + 'px)',
				},
				notebookStyle: {
					transform: 'rotate(40deg) translateX(' + offset + 'px)',
				},
				phoneStyle: {
					transform: 'rotate(-20deg) translateX(-' + offset + 'px)',
				},
				earpodsStyle: {
					transform: 'rotate(-5deg) translateX(' + offset + 'px)',
				},
			}
		}

		this.state = this.stateFromOffset(0);

		//binding functions
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		document.getElementById("root").addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		document.getElementById("root").removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(event) {
		const scrollTop = document.getElementById("root").scrollTop;
		const offset = scrollTop < 206 ? scrollTop : 206;
		this.setState(this.stateFromOffset(Math.floor(offset * 1.8)));
	}

	render() {
		return (
			<div className="landingPage">
				<div className="card tan">
					<Pen className="pen" style={this.state.penStyle}/>
					<div className="navContainer">
						<nav>
							<span className="left">
								<RitualMapLogo className="navLogo"/>
								<Link to='/' className="navLink homePage">Ritual Map</Link>
							</span>
							<span className="right">
								<NavLink to='/Features' className="navLink" activeClassName="active">Features</NavLink>
								<NavLink to='/Pricing' className="navLink" activeClassName="active">Pricing</NavLink>
								<NavLink to='/SignIn' className="navLink" activeClassName="active">Sign In</NavLink>
								<Link to='/SignUp' className="navLink signUp" activeClassName="active">Sign Up</Link>
							</span>
						</nav>
					</div>
					<article className="flex ycenter">
						<h1>let's get organized</h1>
						<p>Record, organize and measure daily routines</p>
						<div className="flex xcenter">
							<Link to='/SignUp' className="ctaButton">Get Started</Link>
						</div>
					</article>
				</div>
				<div className="card tanFade">
				</div>
				<Notebook className="notebook" style={this.state.notebookStyle}/>
				<Phone className="phone" style={this.state.phoneStyle}/>
				<Earpods className="earpods" style={this.state.earpodsStyle}/>
			</div>
		)
	}
}






