export default function SignUp() {
    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" />
                <label htmlFor="contact">Contact Number</label>
                <input type="tel" id="contact" name="contact" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
