export default function SignUp() {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
                <h2 className="text-center mb-4">Sign Up</h2>

                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            className="form-control"
                            placeholder="Enter age"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contact" className="form-label">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            id="contact"
                            name="contact"
                            className="form-control"
                            placeholder="07X XXX XXXX"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Re-enter password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100">
                        Create Account
                    </button>

                    <p className="text-center mt-3 mb-0">
                        Already have an account?{" "}
                        <a href="/login" className="text-decoration-none">
                            Login
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
