import { APPS_DATA } from "../data/apps.js";

export function getFooterHTML() {
  const year = new Date().getFullYear();

  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo-wrap">
            <div class="logo-icon">\u26A1</div>
            <span class="logo-text">Vedica<span>Labs</span></span>
          </a>
          <p class="footer-desc">Building beautiful, purposeful digital experiences \u2014 from AI-powered tools to consumer apps \u2014 crafted with care in India.</p>
          <div class="footer-socials">
            <a href="https://twitter.com/vedicalabs" target="_blank" rel="noopener noreferrer" class="social-link" title="Twitter">\uD835\uDD4F</a>
            <a href="https://linkedin.com/company/vedicalabs" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">in</a>
            <a href="https://github.com/Maruti05" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
              <img src="assets/icons8-github.gif" alt="GitHub" style="width:18px;height:18px;" />
            </a>
            <a href="https://instagram.com/vedicalabs" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram">\uD83D\uDCF8</a>
          </div>
        </div>

        <div class="footer-col">
          <h5>Company</h5>
          <ul class="footer-links">
            <li><a href="about.html"><i>\u2192</i> About Us</a></li>
            <li><a href="index.html#apps"><i>\u2192</i> Our Apps</a></li>
            <li><a href="index.html#features"><i>\u2192</i> Features</a></li>
            <li><a href="contact.html"><i>\u2192</i> Careers</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Support</h5>
          <ul class="footer-links">
            <li><a href="report.html"><i>\u2192</i> Report Issue</a></li>
            <li><a href="contact.html"><i>\u2192</i> Contact Us</a></li>
            <li><a href="privacy.html"><i>\u2192</i> Privacy Policy</a></li>
            <li><a href="privacy.html#terms"><i>\u2192</i> Terms of Service</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Apps</h5>
          <ul class="footer-links">
            ${APPS_DATA.map(app => `
              <li><a href="${app.website}" target="_blank" rel="noopener noreferrer"><i>\u2192</i> ${app.name}</a></li>
            `).join("")}
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">\u00A9 ${year} <span>Vedica Labs</span>. All rights reserved. Made with \u2764\uFE0F in India.</p>
        <div class="footer-legal">
          <a href="privacy.html">Privacy Policy</a>
          <a href="privacy.html#terms">Terms of Service</a>
          <a href="report.html">Report Issue</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}
