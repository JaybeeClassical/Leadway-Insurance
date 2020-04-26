const HowItWorks = () => {
    const template = `
        <how-it-works>
            <h4>how it works?</h4>
            <div class="how-it-works-box">
                <div class="box1">
                    <img src="../asset/box1.svg" alt="box1"/>
                    <h2>step #1</h2>
                    <p>Create an account with leadway <br/>
                    assurance if you don't already have one.</p>  
                </div>
                <div class="box2">
                    <div class="image-box2"></div>
                    <h2>step #2</h2>
                    <p>Choose your Insurance plan or any of<br/>
                    our offered services</p>
                </div>
                <div class="box3">
                    <div class="image-box1"></div>
                    <h2>step #3</h2>
                    <p>Get a quote by clicking on the get a<br/>
                     quote button or you can give us a call if you aren't clear enough.</p>
                </div>
            </div>
        </how-it-works>

    `;

    return template;
}

export default HowItWorks;
