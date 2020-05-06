const Plan = () => {
    const template = `
        <plan>
            <h4 class="plan-text">Choose your Plan</h4>
            <div class="plan-card-wrapper">
                <div class="previous-arrow"></div>
                    <div class="mobile-plan-card">
                        <div class="mobile-each-card">
                            <h4 class="each-cardh4">SAVINGS</h4>
                            <span class="amount">FLEXIBLE</span>
                            <hr/>
                            <ul>
                                <li>Personalised plans</li>
                                <li>Flexible payments</li>
                                <li>cancel at anytime</li>
                                <li>10% additional payment</li>
                            </ul>
                            <hr/>
                            <button>GET A QUOTE</button>
                        </div>

                        <div class="mobile-each-card">
                            <h4 class="each-cardh4">ANNUITY</h4>
                            <span class="amount">$99.99</span>
                            <hr/>
                            <ul>
                                <li>Personalised plans</li>
                                <li>Cancel at anytime</li>
                                <li>Receive payment anytime</li>
                                <li>5% Extra payment</li>
                            </ul>
                            <hr/>
                            <button>GET A QUOTE</button>
                        </div>

                        <div class="mobile-each-card">
                            <h4 class="each-cardh4">FLEXA</h4>
                            <span class="amount">$149.99</span>
                            <hr/>
                            <ul>
                                <li>Flexible business insurance</li>
                                <li>Tools and Machinery insured</li>
                                <li>Staff welfare insurance</li>
                                <li>Work accident's and harzards</li>
                            </ul>
                            <hr/>
                            <button>GET A QUOTE</button>
                        </div>
                    </div>

                    <div class="plan-card">
                        <div class="each-card">
                            <h4 class="each-cardh4">SAVINGS</h4>
                            <span class="amount">FLEXIBLE</span>
                            <hr/>
                            <ul>
                                <li>Personalised plans</li>
                                <li>Flexible payments</li>
                                <li>cancel at anytime</li>
                                <li>10% additional payment</li>
                            </ul>
                            <hr/>
                            <button>GET A QUOTE</button>
                        </div>

                        <div class="each-card">
                            <h4 class="each-cardh4">ANNUITY</h4>
                            <span class="amount">$99.99</span>
                            <hr/>
                            <ul>
                                <li>Personalised plans</li>
                                <li>Cancel at anytime</li>
                                <li>Receive payment anytime</li>
                                <li>5% Extra payment</li>
                            </ul>
                            <hr/>
                            <button>GET A QUOTE</button>
                        </div>

                        <div class="each-card">
                            <h4 class="each-cardh4">FLEXA</h4>
                            <span class="amount">$149.99</span>
                            <hr/>
                            <ul>
                                <li>Flexible business insurance</li>
                                <li>Tools and Machinery insured</li>
                                <li>Staff welfare insurance</li>
                                <li>Work accident's and harzards</li>
                            </ul>
                            <hr/>
                            <button>GET A QUOTE</button>
                        </div>
                    </div>
                <div class="next-arrow"></div>
            </div>
        </plan>
    `;
    return template;
}

export default Plan;