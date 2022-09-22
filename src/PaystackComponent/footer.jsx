import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
    <footer id="homeFooter">
    <div className="footer1">
      <ul>
        <li>
          <h4>Why Paystack</h4>
        </li>
        <li>
          <Link id="footer-links" to="/whyPaystack">
            Why Choose Paystack
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/success">
            Success Rate
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/entrepreneur">
            For Entrepreneurs
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/corporate">
            For Corporate
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/international">
            For International Companies
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/startups">
            For Startup
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/fintech">
            For Fintech
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/school">
            For Schools
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/bet">
            For Betting
          </Link>
        </li>
      </ul>
      <ul id="ctn">
        <li>
          <h4>Contact</h4>
        </li>
        <li>
          <Link id="hello" to="/hello">
            hello@paystack.com
          </Link>
        </li>
      </ul>
    </div>
    <div className="footer2">
      <ul>
        <li>
          <h4>Pricing</h4>
        </li>
        <li>
          <Link id="footer-links" to="/nigeria">
            Nigeria
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/ghana">
            Ghana
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/south">
            South Africa
          </Link>
        </li>
      </ul>
      <br />
      <ul>
        <li>
          <h4>Customers</h4>
        </li>
        <li>
          <Link id="footer-links" to="/testimonial">
            Testimonials
          </Link>
        </li>
      </ul>
      <br />
      <ul>
        <li>
          <h4>Learn</h4>
        </li>
        <li>
          <Link id="footer-links" to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/guides">
            Guides
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/video">
            Video Tutorials
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/decode">
            Decode Fintech
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/commerce">
            Commerce
          </Link>
        </li>
      </ul>
      <ul id="lagos">
        <li>
          <h4>Lagos</h4>
        </li>
        <li>126 Joel Ogunnaike Street,</li>
        <li>Ikeja GRA, Ikeja</li>
        <li>Lagos, Nigeria</li>
        <li>+234 163 16160</li>
      </ul>
      <br />
      <ul>
        <li>
          <h4>Accra</h4>
        </li>
        <li>AfricaWorks,</li>
        <li>35 Patrice Lumumba Road,</li>
        <li>Airport Residential Area</li>
        <li>Accra, Ghana</li>
      </ul>
    </div>
    <div className="footer3">
      <ul>
        <li>
          <h4>Developers</h4>
        </li>
        <li>
          <Link id="footer-links" to="/overview">
            Overview
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/documentation">
            Documentation
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/integration">
            Integrations
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/status">
            Status Page
          </Link>
        </li>
      </ul>
      <br />
      <ul>
        <li>
          <h4>Community</h4>
        </li>
        <li>
          <Link id="footer-links" to="/nigeria">
            Nigeria, Lagos
          </Link>
        </li>
      </ul>
      <br />
      <ul>
        <li>
          <h4>Support</h4>
        </li>
        <li>
          <Link id="footer-links" to="/help">
            Help Desk
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/contatct">
            Contact Us
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/debited">
            Why was i debited?
          </Link>
        </li>
      </ul>
      <ul id="san">
        <li>
          <h4>San Francisco</h4>
        </li>
        <li>354 Oyster Point Blvd,</li>
        <li>South San Francisco,</li>
        <li>CA 94080</li>
        <li>United States</li>
      </ul>
    </div>
    <div className="footer4">
      <ul>
        <li>
          <h4>About</h4>
        </li>
        <li>
          <Link id="footer-links" to="/company">
            Company
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/subscribe">
            Subscribe
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/compliant">
            Compliance
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/career">
            Careers
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/media">
            Media Kits
          </Link>
        </li>
        <li>
          <Link id="footer-links" to="/privacy">
            Privacy & Terms
          </Link>
        </li>
      </ul>
      <ul id="capetown">
        <li>
          <h4>Cape Town</h4>
        </li>
        <li>HOUSE_OF,</li>
        <li>Elkay House(4th Floor)</li>
        <li>186 Loop St, Cape Town City</li>
        <li>Centre,</li>
        <li>Cape Town, 8001</li>
        <li>South Africa</li>
      </ul>
    </div>
  </footer>
    </div>
  )
}

export default Footer