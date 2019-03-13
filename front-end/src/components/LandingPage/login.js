import React from 'react';

function Login() {
	return (
		<div>
			<h1>Login using:</h1>
			<button>Facebook</button>
			<button>GitHub</button>
			<button a href="localhost:9000/auth/google">
				Google+
			</button>
		</div>
	);
}

export default Login;
