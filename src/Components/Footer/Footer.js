import React from 'react';
import Classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={Classes.footer}>
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
          Copyright © DemoProject.com {new Date().getFullYear()}
        </span>
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center text-light">
          Free &nbsp;
          <a
            href="https://www.bootstrapdash.com/bootstrap-admin-template/"
            target="_blank"
          >
            Bootstrap admin templates
          </a>
          &nbsp; from DemoProject.com
        </span>
      </div>
    </footer>
  );
};
export default Footer;
