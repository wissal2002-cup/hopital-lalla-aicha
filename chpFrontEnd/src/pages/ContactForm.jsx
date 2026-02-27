import { useState } from 'react';
import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        telephone: '',
        email: '',
        message: ''
      });
    
      const [responseMessage, setResponseMessage] = useState('');
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/contact', formData);
          setResponseMessage(response.data.message);
          setFormData({ name: '', telephone: '', email: '', message: '' });
        } catch (error) {
          setResponseMessage("Erreur lors de l’envoi du message.");
}
    };




    return (
        <div className="container my-5" id="contactform">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="p-5 rounded-4" style={{backgroundColor:"#ececf0",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.1)"}}>
                        <form onSubmit={handleSubmit}>
                            <h1 className="text-center mb-5">Contactez-nous maintenant</h1>
                            
                            <div className="row gx-3 mb-4">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <input 
                                        type="text" 
                                        name="name"
                                        className="form-control form-control-lg border-0 py-3 px-4" 
                                        placeholder="Nom" 
                                        required
                                        style={{ borderRadius: '25px' }}
                                        value={formData.name}
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="col-md-6">
                                    <input 
                                        type="email" 
                                        name="email"
                                        className="form-control form-control-lg border-0 py-3 px-4" 
                                        placeholder="Email" 
                                        required 
                                        style={{borderRadius:'25px'}}
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="mb-4">
                                <input 
                                    type="tel" 
                                    name="telephone" 
                                    className="form-control form-control-lg border-0 py-3 px-4" 
                                    placeholder="Téléphone" 
                                    required 
                                    style={{ borderRadius: '25px' }}
                                    value={formData.telephone}
                                    onChange={handleChange}

                                />
                            </div>
                            
                            <div className="mb-5">
                                <textarea 
                                name="message" 
                                    className="form-control form-control-lg border-0 py-3 px-4" 
                                    placeholder="Message" 
                                    rows="4" 
                                    required 
                                    style={{ borderRadius: '25px' }}
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            
                            <div className="text-center">
                                <button 
                                    type="submit" 
                                    className="btn btn-lg text-white px-5 py-3" 
                                    style={{ 
                                        backgroundColor: '#5b4577',
                                        borderRadius: '20px',
                                        fontSize: '1.25rem',
                                        width: '200px',
                                        border: 'none'
                                    }}
                                >
                                    Envoyer
                                </button>
                            </div>
                            {responseMessage && (
                <p className="mt-3 text-center text-success">{responseMessage}</p>
              )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;