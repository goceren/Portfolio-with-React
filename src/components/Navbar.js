import React, { Component } from 'react';
import $ from 'jquery';
import { scroller } from 'react-scroll';
import Logo from '../images/logo.png';
import Button from '@material-ui/core/Button';
window.$ = $;

class Navbar extends Component {
	constructor(props) {
		super();
	}
	state = {
		drawerOpen: false,
		headerShow: false
	}

	componentDidMount() {
		$('.nav-icon').click(function () {
			$('#nav-links').toggleClass("responsive");
			return false;
		});
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		if (window.scrollY > 0) {
			this.setState({
				headerShow: true
			})
		} else {
			this.setState({
				headerShow: false
			})
		}
	}
	scrollToElement = (element) => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 50,
			smooth: true,
			offset: -150
		});

	}
	render() {

		return (
			<nav style={{
				backgroundColor: this.state.headerShow ? 'rgba(0,0,0, 0.3)' : 'transparent',
			}}>
				<div className="container clearfix">
					<div id="logo-box">
						<Button onClick={() => this.scrollToElement('header')} >
							<img src={Logo} alt="VYG" />
						</Button>
					</div>
					<div id="nav-links" className="responsive">
						<ul>
							<li className="nav-item">

								<Button onClick={() => this.scrollToElement('header')} className="nav-link text-uppercase nav-icon">
									<i className="fas fa-bars"></i>
								</Button>
							</li>

							<li className="nav-item">
								<Button onClick={() => this.scrollToElement('home')} style={{ backgroundColor: "transparent" }} className="nav-link text-uppercase">Home</Button>

							</li>
							<li className="nav-item">
								<Button onClick={() => this.scrollToElement('about')} style={{ backgroundColor: "transparent" }} className="nav-link text-uppercase">About</Button>
							</li>
							<li className="nav-item">
								<Button onClick={() => this.scrollToElement('portfolio')} style={{ backgroundColor: "transparent" }} className="nav-link text-uppercase">Portfolio</Button>
							</li>
							<li className="nav-item">
								<Button href="https://goceren.com/whoop" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "transparent" }} className="nav-link text-uppercase">Whoop</Button>

							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}
export default Navbar
