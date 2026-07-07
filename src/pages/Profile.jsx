import DashboardLayout from "../layouts/DashboardLayout";
import "../styles/profile.css";

function Profile() {
  return (
    <DashboardLayout title="My Profile">

      {/* Profile Header */}

      <div className="profile-header">

        <div className="profile-avatar">
          <img
            src="https://ui-avatars.com/api/?name=Atiq+Rahman&background=2563eb&color=fff&size=120"
            alt="Profile"
          />
        </div>

        <div className="profile-info">
          <h2>Atiq Ur Rahman</h2>
          <p>Premium Investor</p>

          <div className="profile-badges">
            <span className="verified">✔ Email Verified</span>
            <span className="verified">✔ KYC Verified</span>
          </div>
        </div>

      </div>

      {/* Information */}

      <div className="profile-grid">

        {/* Personal Details */}

        <div className="profile-card">

          <h3>Personal Information</h3>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" defaultValue="Atiq Ur Rahman" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" defaultValue="atiq@gmail.com" />
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input type="text" defaultValue="+91 9876543210" />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" />
          </div>

          <button className="save-btn">
            Save Changes
          </button>

        </div>

        {/* Bank Details */}

        <div className="profile-card">

          <h3>Bank Details</h3>

          <div className="form-group">
            <label>Bank Name</label>
            <input type="text" placeholder="State Bank of India" />
          </div>

          <div className="form-group">
            <label>Account Number</label>
            <input type="text" placeholder="XXXXXXXX1234" />
          </div>

          <div className="form-group">
            <label>IFSC Code</label>
            <input type="text" placeholder="SBIN0001234" />
          </div>

          <div className="form-group">
            <label>UPI ID</label>
            <input type="text" placeholder="example@upi" />
          </div>

          <button className="save-btn">
            Update Bank
          </button>

        </div>

      </div>

      {/* Account Status */}

      <div className="profile-card">

        <h3>Account Status</h3>

        <div className="status-grid">

          <div className="status-item">
            <h4>Account Status</h4>
            <span className="active">Active</span>
          </div>

          <div className="status-item">
            <h4>KYC</h4>
            <span className="active">Completed</span>
          </div>

          <div className="status-item">
            <h4>Membership</h4>
            <span className="premium">Premium</span>
          </div>

          <div className="status-item">
            <h4>Joined</h4>
            <span>01 Jan 2026</span>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Profile;