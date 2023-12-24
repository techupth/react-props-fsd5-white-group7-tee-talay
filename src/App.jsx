import "./App.css";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">🚀 XYZ CORP</div>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <div className="company-detail-left">
        <h1>Welcome to XYZ Corp</h1>
        <p>Your Trusted Partner in Excellence</p>
        <img src="https://placehold.co/300x300" />
      </div>
      <div className="company-detail-right">
        <h2>About Our Company</h2>
        <p>
          Welcome to XYZ Corp, where excellence meets innovation. We are a
          passionate team dedicated to providing high-quality solutions for the
          technology industry. With a track record of 10 years of success, we
          have become a trusted partner for clients worldwide.
        </p>
        <p>
          Our mission is to empower businesses through cutting-edge technology.
          We believe in integrity, collaboration, and innovation, and we strive
          to make a positive impact on businesses and communities alike.
        </p>
        <p>
          At XYZ Corp, we take pride in our commitment to staying at the
          forefront of technological advancements. Our team of experts is ready
          to collaborate with you to tackle your most complex challenges and
          drive your success.
        </p>
        <Button text="Learn more" />
      </div>
    </main>
  );
}

function ProductSection() {
  return (
    <section className="product-section">
      <div className="product-section-container">
        <h2 className="product-featured-heading">Featured Products</h2>
        <div className="product-card-list">
          <div className="product-card">
            <img
              src="https://placehold.co/300x300"
              alt="The Lorem Ipsum for photos."
            />
            <h3>Premium Bluetooth Headphones</h3>
            <p className="product-price">2,400 Baht</p>
            <Button text="Add to Cart" />
          </div>
          <div className="product-card">
            <img
              src="https://placehold.co/300x300"
              alt="The Lorem Ipsum for photos."
            />
            <h3>Classic Leather Watch</h3>
            <p className="product-price">4,000 Baht</p>
            <Button text="Add to Cart" />
          </div>
          <div className="product-card">
            <img
              src="https://placehold.co/300x300"
              alt="The Lorem Ipsum for photos."
            />
            <h3>Organic Green Tea</h3>
            <p className="product-price">79.99 Baht</p>
            <Button text="Add to Cart" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Your Ecommerce Store. All rights reserved.</p>
    </footer>
  );
}

function Button(props) {
  return <button className="add-to-cart-button">{props.text}</button>;
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
// Todo 1: ให้แก้ไข Component Button ณ จุดที่ Declare โดยให้แสดงข้อความบนปุ่มที่แตกต่างกันออกไปได้ด้วยการใช้ Prop และกำหนดให้ Prop ชื่อ buttonText
// Todo 2: ให้กำหนดค่าให้กับ Prop buttonText เป็น “Learn More” เข้าไปใน Component Button ณ จุดที่ Render ปุ่ม “Learn More”
// Todo 3: ให้กำหนดค่าให้กับ Prop buttonText เป็น “Add to Cart” เข้าไปใน Component Button ณ จุดที่ Render ปุ่ม “Add to Cart” ทั้ง 3 จุดบนหน้าเว็บไซต์
// Todo 4: ให้แก้ไข Component Button ณ จุดที่ Declare โดยให้แสดง className ที่แตกต่างกันออกไปได้ด้วยการใช้ Prop และกำหนดให้ Prop ชื่อ buttonStyle
// Todo 5: ให้กำหนดค่าให้กับ Prop buttonStyle เป็น “learn-button” เข้าไปใน Component Button ณ จุดที่ Render ปุ่ม “Learn More”
// Todo 6: ให้กำหนดค่าให้กับ Prop buttonStyle เป็น “add-to-cart-button” เข้าไปใน Component Button ณ จุดที่ Render ปุ่ม “Add to Cart” ของ Product อันที่ 1 และ 2
// Todo 7: ให้กำหนดค่าให้กับ Prop buttonStyle พร้อมค่า “add-to-cart-button-secondary” เข้าไปใน Component Button ณ จุดที่ Render ปุ่ม “Add to Cart” ของ Product อันที่ 3
