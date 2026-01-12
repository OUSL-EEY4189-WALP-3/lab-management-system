export default function Login() {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Login</h2>

                <form>
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

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
