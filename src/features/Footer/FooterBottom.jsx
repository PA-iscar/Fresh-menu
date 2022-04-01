import React from 'react';
import "./footer.css";

export default function FooterBottom() {
  return (
    <div className="footer_bottom">
    <div>
      <nav>
        <h4>CATEGORIES</h4>

        <a href="/category/mains">Mains</a>

        <a href="/category/pizzas">Pizzas</a>

        <a href="/category/salads">Salads</a>

        <a href="/category/desserts">Desserts</a>

        <a href="/category/quickbites">Quickbites</a>
      </nav>
      <nav>
        <h4>CUISINES</h4>
        <span>
          <a href="/cuisine/mexican-food">Mexican</a>

          <a href="/cuisine/thai-food">Thai</a>

          <a href="/cuisine/continental-food">Continental</a>

          <a href="/cuisine/mediterranean-food">Mediterranean</a>
        </span>
        <span>
          <a href="/cuisine/indian-food">Indian</a>

          <a href="/cuisine/chinese-food">Chinese</a>

          <a href="/cuisine/italian-food">Italian</a>

          <a href="/cuisine/american-food">American</a>
        </span>
      </nav>
    </div>
  </div>
  )
}
