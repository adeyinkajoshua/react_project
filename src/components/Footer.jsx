 import '../css/ideas.css'

const Footer=()=>{
    const item=['revenue Management','Meetings & Events Strategy','Planning & Performance Insights Consulting' ]
    
    
    return(
        
        <div className="container-fluid " id="flu">
        <img src="./Asset/Capture.PNG" alt="" />
            <div className="row" id="last">
                
                    <div class="col">
                        <h5> Solution</h5>
                        <div className="row">
                            <a href="#" className="text-decoration-none text-light">{item[0]} </a>
                            <a href="#" className="text-decoration-none text-light">{item[1]}</a>
                            <a href="#" className="text-decoration-none text-light">{item[2]}</a>
                        </div>
                    </div>
                    <div className="col-2">
                        <h5>Clients</h5>
                        <div className="row ">
                            <a href="#" className="text-decoration-none text-light"> Support Model </a>
                            <a href="#" className="text-decoration-none text-light">Case Studies</a>
                        </div>
                    </div>
                    <div className="col-2">
                        <h5>Resources</h5>
                        <div className="row">
                            <a href="#" className="text-decoration-none text-light">Content Library</a>
                            <a href="#" className="text-decoration-none text-light">Blog</a>
                            <a href="#" className="text-decoration-none text-light"> News</a>
                            <a href="#" className="text-decoration-none text-light">Videos</a>
                            <a href="#" className="text-decoration-none text-light"> Podcast</a>
                            <a href="#" className="text-decoration-none text-light"> FAQ</a>
                            <a href="#" className="text-decoration-none text-light">Revenue Uplift Calculator</a>
                        </div>
                    </div>
                    <div className="col-2">
                        <h5>Company</h5>
                        <div class="row">
                            <a href="#" className="text-decoration-none text-light">Company </a>
                            <a href="#" className="text-decoration-none text-light">About Us</a>
                            <a href="#" className="text-decoration-none text-light">Leadership Team</a>
                            <a href="#" className="text-decoration-none text-light">Partnerships</a>
                            <a href="#" className="text-decoration-none text-light">Careers</a>
                            <a href="#" className="text-decoration-none text-light">Global Offices</a>
                            <a href="" className="text-decoration-none text-light">Media Kit</a>

                        </div>
                    </div>
                    <div className="col-2">
                        <h5> Connect</h5>
                        <div className="row">
                            <a href="#" className="text-decoration-none text-light">Connect </a>
                            <a href="#" className="text-decoration-none text-light"> Events</a>
                            <a href="#" className="text-decoration-none text-light">Request a Demo</a>
                            <a href="#" className="text-decoration-none text-light">Newsletter Signup</a>
                            <a href=""  className="text-decoration-none text-light">Support</a>
                        </div>
                    </div>
                    <div className="col-2 ">
                        <div className="row">
                            <img src="./Asset/review.PNG" alt="" />
                        </div>
                    </div>
                    <div className="col-2 text-light">
                        <h5>Markets</h5>
                        <div className="row">
                            <a href="#" className="text-decoration-none text-light">Hotels </a>
                            <a href="#" className="text-decoration-none text-light"> Meetings & Events</a>
                            <a href="#" className="text-decoration-none text-light">Parking</a>
                        </div>
                    </div>
                    <div class="col-2 text-light">
                        <h5>Learning</h5>
                        <div class="row ">
                            <a href="#" className="text-decoration-none text-light">Learning Resources </a>
                            <a href="#" className="text-decoration-none text-light">IDeaS Global Certification Program</a>
                            <a href="#" className="text-decoration-none text-light">Education Scholarships</a>
                            <a href="#" className="text-decoration-none text-light">Webinars</a>
                            <a href="#" className="text-decoration-none text-light">Glossary</a>
                            <a href="#" className="text-decoration-none text-light">Universities & Academic Institutions</a>
                        </div>
                    </div>
                    <div className="d-flex">
                        <p className="text-light mt-5 "> &copy;2023 IDeaS/privacy/statement terms & conditions/ accessibility /assistance/
                            update
                            preferences/dpa
                            request</p>
                        <div className="mess"><img src="./Asset/icon/message.PNG" width="60px"/>

                        </div>
                    </div>



                </div>
            // </div> 
    )
}

export default Footer;