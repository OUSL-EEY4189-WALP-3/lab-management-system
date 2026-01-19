export default function Reports() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <p style={{ margin: 0, fontWeight: "bold" }}>M.A. Wijesinghe</p>
        <button
          style={{
            borderRadius: "12px",
            padding: "8px 16px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            cursor: "pointer",
            transition: "0.3s"
          }}
        >
          Logout
        </button>
      </div>

      {/* Page Title */}
      <h1 style={{ marginBottom: "20px" }}>Reports</h1>

      {/* Table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Test type</th>
            <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Date</th>
            <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Checked by</th>
            <th style={{ padding: "10px", textAlign: "left", borderBottom: "1px solid #ddd" }}>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Blood Sugar</td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>2026/01/20</td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Sirimath</td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              <button
                style={{
                  borderRadius: "12px",
                  padding: "6px 12px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "0.3s"
                }}
              >
                Download
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
