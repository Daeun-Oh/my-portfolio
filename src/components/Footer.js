import React from "react";

function Footer() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: your-email@example.com</p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          your-username
        </a>
      </p>
    </section>
  );
}

export default React.memo(Footer);
