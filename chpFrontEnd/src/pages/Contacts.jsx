import React from "react";

const Contacts = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">Contacts</h1>
      <div className="row bg-light rounded-4 shadow p-4">
        {/* Contact Info */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="bg-white rounded-4 p-4 shadow-sm h-100">
            <h3 className="fw-bold mb-4">Contact Us</h3>
            <p><strong>Phone:</strong> <a href="tel:08001234567">0 (800) 123 45 67</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/8001234567">0 (800) 123 45 67</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@site.com">info@site.com</a></p>
            <p><strong>Address:</strong> Centre Hospitalier Provincial Lalla Aicha, Avenue Hassan II, Témara, Maroc</p>
            <p><strong>Working hours:</strong> 9:00AM - 6:00PM</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="col-md-6">
          <div className="h-100 rounded-4 overflow-hidden shadow-sm">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2927.216201323909!2d-6.92976242428929!3d33.91793747320777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda70d56b45b865b%3A0xce3ffdcc5d948f61!2sCentre%20Hospitalier%20Provincial%20Lalla%20Aicha%20de%20Skhirat-T%C3%A9mara!5e1!3m2!1sfr!2sma!4v1743938912830!5m2!1sfr!2sma" 
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
