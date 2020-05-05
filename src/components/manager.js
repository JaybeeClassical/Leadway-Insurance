const Manger = () => {
    const template = `
        <manager>
            <div class="Manager-wrapper">
                <h4 class="speaker-title">Speak to a Manager</h4>
                <p class="speaker-para">Select from the List of managers and click to Place a Call </p>
                <div class="manager-image-wrapper">
                    <div class="manager">
                        <img src="https://res.cloudinary.com/techibytes/image/upload/v1588644121/FolorunshoOladeleSM_n9fku0.png" />
                        <h3>Michael Yetunde</h3>
                        <p>Lagos state</p>
                    </div>
                    <div class="manager">
                        <img src="https://res.cloudinary.com/techibytes/image/upload/v1588644121/TJ_bdc0h6.png" />
                        <h3>Taiwo Kehinde</h3>
                        <p>sokoto state</p>
                    </div>
                    <div class="manager">
                        <img src="https://res.cloudinary.com/techibytes/image/upload/v1588644121/mike-adeoye_h691k8.png" />
                        <h3>ahmed elsayed</h3>
                        <p>kwara state</p>
                    </div>
                    <div class="manager">
                        <img src="https://res.cloudinary.com/techibytes/image/upload/v1588644121/AJ-MAMA_egsqeh.png" />
                        <h3>Eniola Bolade</h3>
                        <p>cross river</p>
                    </div>
                    <div class="manager">
                        <img src="https://res.cloudinary.com/techibytes/image/upload/v1588644121/mail-1_lucmbn.png" />
                        <h3>Ogbonna Chinaza</h3>
                        <p>rivers state</p>
                    </div>
                    <div class="manager">
                        <img src="https://res.cloudinary.com/techibytes/image/upload/v1588644121/Somaliland-ONE-1-513x239_ssfg2f.png" />
                        <h3>Yusuf Atibatu</h3>
                        <p>kano state</p>
                    </div>
                    <div class="manager">
                        <img src="https://res.cloudinary.com/techibytes/image/upload/v1588644120/resized-80_hlh5qv.png" />
                        <h3>Sarah Mathew</h3>
                        <p>ondo state</p>
                    </div>
                    <div class="manager">
                        <img src="https://res.cloudinary.com/techibytes/image/upload/v1588644121/DSC_8631_col_ttjqbu.png" />
                        <h3>Logan Paul</h3>
                        <p>Anambra state</p>
                    </div>
                </div>

                <div class="video-wrapper">
                    <div class="video">
                        <iframe
                        src="https://www.youtube.com/embed/EMtV0twe9_0" 
                        frameborder="0" allow="accelerometer; autoplay; 
                        encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                        </iframe>
                    </div>
                    <p class="video-text">
                        How we are able to provide the best 
                        affordable all inclusive Insurance to 
                        ensure your business, life, property 
                        and your future is covered and in good 
                        hands.
                    </p>
                </div>
            </div>
        </manager>
    `
    return template;
}
export default Manger;