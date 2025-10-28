import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";


export default function Footer() {
    return(
        // grid layout
        <div>
            <div>
                <img 
                    src={'/logo.png'}
                    width={200}
                />
                <p>Keeping Your Health in Perfect Sync</p>
                <address>
                    <a href="mailto:info@allieddiagnostics.lk"><MdEmail /> info@allieddiagnostics.lk</a><br />
                    <a href="tel:94777123456"><BsFillTelephoneFill /> +94 777 123 456</a>
                    <p><FaLocationDot /> Deniyaya</p>
                </address>
            </div>
            <div>
                <p>Book an appointment now</p>
                <button>Book Now</button>
            </div>
        </div>
    );
}