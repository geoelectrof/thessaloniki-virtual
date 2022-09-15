import React from "react"
import { Container, Col, Row} from 'react-bootstrap'


export default function Contact() {
    return (
  
    // <ContactForm />
    <Container>
        <header className="text-center pt-5">
            <h1 className="h1 display-2 text-primary pb-3 samples-title">
                <span className="">Contact</span>
            </h1>
        </header>
        <Row className="justify-content-md-center">
            <Col md={5}>
                <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
                    <div className="card-header bg-transparent border-0 text-center text-uppercase">
                        <h3 className="h2 text-primary">Send us a message</h3>
                    </div>
                    <div className="card-body">
                        <form name="contact" method="post">
                            <div className = "form-group" >
                                
                                <input type="hidden" name="form-name" value="contact" />
                             
                                <label className="mb-0"><span className="text-primary">Your name*</span></label>
                                <input name="name" type="text" className="form-control" placeholder="Name" />
                                
                                <label className="mb-0 mt-3"><span className="text-primary">Your Email*</span></label>
                                <input name="email" type="email" className="form-control" placeholder="Email" />

                                <label className="mb-0 mt-3"><span className="text-primary">Your message</span></label>
                                <textarea name="message" type="text" className="form-control" placeholder="Message" />
                                
                                <p>
                                    <button type="submit" className="btn btn-primary btn-lg w-100 text-uppercase text-white mt-3" >Send message</button>
                                </p>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>

    )
}