import { ImageSlider } from "@/components";
import { TiDocumentText } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
import { GrTest } from "react-icons/gr";


export default function Home() {

  const tests = [
    {title: 'Full Blood Count Test', image: '/test1.jpg'},
    {title: 'Blood Sugar Test', image: '/test2.jpg', },
    {title: 'Urine Test', image: '/test3.jpg'}
  ]

  return (
    <main>
        <div>
            <ImageSlider />
            {/* Description section */}
            <div>
                <img 
                  src={'/logo.png'}  
                  alt="logo"
                  width={200}
                />
                <p>At Allied Diagnostics, we are committed to delivering accurate, reliable and timely diagnostic services to support better healthcare outcomes. Equipped with modern technology and a team of qualified professionals, our laboratory ensures the highest standards in testing and reporting.</p>
            </div>
            {/* Achievement section*/}
            <div>
                <div>
                    <span><TiDocumentText /></span>
                    <span>10000+ Reports</span>
                </div>
                <div>
                    <span><IoPeople /></span>
                    <span>1000+ Patients</span>
                </div>
                <div>
                    <span><GrTest /></span>
                    <span>20+ Tests</span>
                </div>
            </div>
            {/* Test types section */}
            <div>
                <h2>Most Picked Tests</h2>
                {tests.map((test, index) => (
                  <div>
                      <img 
                          src={test.image}
                          height={300}
                      />
                      <h5>{test.title}</h5>
                  </div>
                ))}
            </div>
        </div>
    </main>
  );
}

