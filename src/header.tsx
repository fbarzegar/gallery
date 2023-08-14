export default function Header() {
  return (
    <div>
      <header
        style={{
          background: "#AFAFAF",
          height: 60,
          marginBottom: 10,
          borderBottom: "1px solid gray",
          alignItems: "center",
          textAlign: "left",
        }}
      >
        <li style={{ padding: "20px", cursor: "pointer" }}>
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </a>
        </li>
      </header>
    </div>
  );
}
