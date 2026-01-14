export default function BookTest() {
    return(
        <div>
             <div>
                <p>M.A. Wijesinghe</p>
                <button>Logout</button>
            </div>
            <h1>Test Booking</h1>
            <form>
                <div>
                    <label htmlFor="test-name">
                        Test type
                    </label>
                    <select name="test">
                        <option value="">-- Select Test --</option>
                        <option value="blood">Blood Test</option>
                        <option value="urine">Urine Test</option>
                        <option value="xray">X-Ray</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="date" className="form-label">
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        placeholder="Select date"
                    />
                </div>

                <div>
                    <label htmlFor="contact">
                        Time
                    </label>
                    <input
                        type="time"
                        id="time"
                        name="contact"
                        placeholder="12:00 am"
                    />
                </div>
                <p>Cost: Rs: 500.00</p>
                <button type="submit">
                    Book now
                </button>
            </form>
        </div>
    )
}