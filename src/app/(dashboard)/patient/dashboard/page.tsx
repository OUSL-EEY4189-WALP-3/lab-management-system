import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import User from "@/models/User";

export default async function PatientDashboard() {

    const session = await getServerSession(authOptions);
    if(!session) {
      redirect("/login")
    }
    await connectDB();
    const user = await User.findOne({email: session.user.email}).lean();
    if(!user) {
      console.log("No user found.")
    }
    return (
        <div className="h-100">
            {/* Top Row */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-0 text-primary">
                        Patient Dashboard
                    </h4>
                    <small className="text-muted">
                        Welcome back, {user.name}
                    </small>
                </div>

            </div>

            {/* Profile Card */}
            <div className="card border-0 shadow-sm mb-4 mt-4">
                <div className="card-body">
                    <div className="row align-items-center">
                        {/* Avatar */}
                        <div className="col-md-3 text-center mb-3 mb-md-0">
                            <img
                                src="/user2.jpg"
                                alt="profile-image"
                                className="rounded-circle img-fluid"
                                style={{
                                    width: "300px",
                                    height: "300px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>

                        {/* Details */}
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <small className="text-muted">
                                        Full Name
                                    </small>
                                    <p className="fw-semibold mb-0">
                                        {user.name}
                                    </p>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <small className="text-muted">Age</small>
                                    <p className="fw-semibold mb-0">{user.age}</p>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <small className="text-muted">Gender</small>
                                    <p className="fw-semibold mb-0">{user.gender}</p>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <small className="text-muted">
                                        Contact
                                    </small>
                                    <p className="fw-semibold mb-0">
                                        {user.contact}
                                    </p>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <small className="text-muted">Email</small>
                                    <p className="fw-semibold mb-0">
                                        {user.email}
                                    </p>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <small className="text-muted">
                                        Blood Type
                                    </small>
                                    <p className="fw-semibold mb-0">A+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
