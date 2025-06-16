
import React from 'react';

export default function Layout({ children }) {
  return (
    <div dir="rtl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700&display=swap');
        body {
          font-family: 'Assistant', sans-serif;
          background-color: #FFFFFF;
        }
      `}</style>
      <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          (function(){
            if (typeof emailjs !== 'undefined') {
              emailjs.init("service_fs7b0ez"); // Replace with your actual public key
            }
          })();
        `
      }} />
      <main>{children}</main>
    </div>
  );
}
