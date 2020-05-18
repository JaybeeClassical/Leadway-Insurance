const Testimony = () => {
    const template = `
        <testimony>
            <div class="testimony">
                <h3 class="testimony-title">Testimonials</h3>
                <div class="arrow-previous"></div>
                <div class="each-testimony">
                    <img src="https://res.cloudinary.com/techibytes/image/upload/v1589710843/https__cdn.cnn.com_cnnnext_dam_assets_181127124252-01-mark-luckie-112818_dgypuk.png" class="testimony-image" alt="business-man"/>
                    <p class="testimony-test">
                    My shop was burnt down by wild 
                    fire and I wasn't afraid that I 
                    will have to start all over 
                    because Leadway assurance had my 
                    business secured. In a couple of 
                    hours I received a cheque of 5 
                    million. Thank you leadway!
                    </p>

                    <h4 class="testimonial-person-name">Chief Okwudike Mathew</h4>
                    <p class="testimonial-person-work">Business man</p>
                </div>
                <div class="arrow-next"></div>
            </div>

            <div class="download-app">
                <div class="left-side">
                    <h1>Download our app in two simple steps</h1>
                    <h2>step 1</h2>
                    <p>Click on any of the device badges below depending on your device. 
                        You will be redirected to the app store for your specific device operating system.
                    </p>

                    <h2>step 2</h2>
                    <p>Look for the download button and click on it, the proceed to download.</p>

                    <h2>step 3</h2>
                    <p>Install your Newly downloaded Leadway Assurance App and start insuring your future.</p>

                    <div class="button-wrapper">
                        <img src="https://res.cloudinary.com/techibytes/image/upload/v1589721564/1_EiZrcN_DIapbZaxutxbZRA_lknzxb.png"/>
                        <img src="https://res.cloudinary.com/techibytes/image/upload/v1589721558/1_POlwgD8liUYUqiEU6IU1Pw_xypwrl.png"/>
                    </div>
                </div>

                <div class="right-side">
                    <img src="https://res.cloudinary.com/techibytes/image/upload/v1589759532/edited-removebg-preview_p1ypo0.png"/>
                </div>
            </div>

            <div class="contact">
                <h1>get in touch</h1>
                <div class="contact-form-wrapper">
                    <div class="contect-text">
                        <p>
                        Do you have any Questions, complaints, messages,
                        enquires, contribution or business for us? 
                        Then this form is for you, fill the form accordingly and click send.
                        </p>

                        <h3 class="contact-number">002-010-66269735</h3>
                    </div>
                    <div class="contact-form">
                        <form>
                            <input type="email" placeholder="Email"/>
                            <select id="select"> 
                                <option value="" disabled selected>Subject</option> 
                            </select>
                            <textarea id="textarea" rows="4" cols="50" class="textarea">
                            </textarea>
                            <button type="submit" class="send-button">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </testimony>
    `;

    return template;
}

export default Testimony;