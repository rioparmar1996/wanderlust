function Navbar() {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				Logo
			</a>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						//use react-router to create routes
						//https://v5.reactrouter.com/web/guides/quick-start
						<a class="nav-link" href="#">
							Home <span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							About
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link " href="#">
							Photography
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link " href="#">
							Writing
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link " href="#">
							Location
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
