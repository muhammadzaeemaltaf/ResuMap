export let templete1 = `

     <div class="resume templete1" id="resume">
                                <div class="main-content">
                                    <!-- Name and Title -->
                                    <div>
                                        <h1 id="resume-name">John Doe</h1>
                                        <h3 class="title" id="resume-title">Web Developer</h3>
                                    </div>
                                    <div class="flex">
                                        <div class="row">
                                            <div class="col left">
                                                <!-- Contact Detail -->
                                                <div class="left-col-inner contact">
                                                    <h2>CONTACT</h2>
                                                    <div class="detail">
                                                        <span><i class="ri-phone-fill"></i></span>
                                                        <a id="resume-phoneno">+92 336 XXXXXXX</a>
                                                    </div>
                                                    <div class="detail">
                                                        <span><i class="ri-mail-fill"></i></span>
                                                        <a id="resume-email"
                                                            style="text-overflow: ellipsis; overflow: hidden;">
                                                            johndoe@gmail.com
                                                        </a>
                                                    </div>
                                                    <div class="detail">
                                                        <span><i class="ri-home-4-fill"></i></span>
                                                        <p id="resume-address" style="text-wrap: wrap;">123 Street, XYZ
                                                            road.
                                                        </p>
                                                    </div>
                                                    <div class="detail">
                                                        <span><i class="ri-link-m"></i></span>
                                                        <a id="resume-link" style="text-wrap: wrap;">
                                                            www.johndoe.com
                                                        </a>
                                                    </div>
                                                </div>

                                                <div class="line"></div>

                                                <!-- Skills -->
                                                <div class="left-col-inner skills">
                                                    <h2>SKILLS</h2>
                                                    <ul id="resume-skills">
                                                        <li>HTML</li>
                                                    </ul>
                                                </div>

                                                <div class="line"></div>

                                                <!-- Languages -->
                                                <div class="left-col-inner lang">
                                                    <h2>LANGUAGES</h2>
                                                    <ul id="resume-lang">
                                                        <li>English</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="col right">
                                                <!-- Summary/Objective -->
                                                <div class="summary">
                                                    <h2>SUMMARY</h2>
                                                    <div class="paragraph" id="resume-summary">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    </div>
                                                </div>

                                                <div class="line"></div>

                                                <!-- Education -->
                                                <div class="education">
                                                    <h2>EDUCATION</h2>
                                                    <div id="resume-education">
                                                        <div class="flex div">
                                                            <div>
                                                                <h3>Bachelor of Computer Science</h3>
                                                                <h4>ABC University</h4>
                                                                <p>
                                                                    <i class="ri-calendar-fill"></i>
                                                                    2021 - Ongoing
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="line"></div>

                                                <!-- Work Experience -->
                                                <div class="work-experience">
                                                    <h2>WORK EXPERIENCE</h2>
                                                    <div id="resume-experience">
                                                        <div class="flex div">
                                                            <div class="year">
                                                                <h3>Software Engineer</h3>
                                                                <h4>XYZ Corp</h4>
                                                                <p>
                                                                    <i class="ri-calendar-fill"></i>
                                                                    2018 - 2020

                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

`;
export let templete2 = `

 <div class="resume templete2" id="resume">
        <div class="main-content" style=" margin: 4rem 2rem 2rem 2rem;">
            <!-- Name and Title -->
            <div>
                <h1 id="resume-name" style="font-size: 36px; text-transform: uppercase;">John Doe</h1>
                <h3 class="title" id="resume-title" style=" font-size: 18px; text-transform: uppercase; font-weight: 700;">Web Developer</h3>
            </div>

            <div class="contact" style="  display: flex; justify-content: center; gap: 5px; padding: 1rem 0;">
                <div class="detail" style="display: flex; justify-content: center; gap: 5px; flex: 1; width:25%;">
                    <span><i class="ri-phone-fill"></i></span>
                    <a id="resume-phoneno" style="color: #384347; text-decoration: underline; text-overflow: ellipsis; overflow: hidden;">+92 336 XXXXXXX</a>
                </div>
                <div class="detail" style="display: flex; justify-content: center; gap: 5px; flex: 1; width:25%;">
                    <span><i class="ri-mail-fill"></i></span>
                    <a id="resume-email"
                        style="color: #384347; text-decoration: underline; text-overflow: ellipsis; overflow: hidden;">
                        johndoe@gmail.com
                    </a>
                </div>
                <div class="detail" style="display: flex; justify-content: center; gap: 5px; flex: 1; width:25%;">
                    <span><i class="ri-home-4-fill"></i></span>
                    <p id="resume-address" style="text-overflow: ellipsis; overflow: hidden;">123 Street, XYZ
                        road.
                    </p>
                </div>
                <div class="detail" style="display: flex; justify-content: center; gap: 5px; flex: 1; width:25%;">
                    <span><i class="ri-link-m"></i></span>
                    <a id="resume-link" style="color: #384347; text-decoration: underline; text-overflow: ellipsis; overflow: hidden;">
                        www.johndoe.com
                    </a>
                </div>
            </div>

            <div class="flex" style="  margin-top: 0;  overflow: hidden;">
                <div class="row">
                    <div class="col right" style="width: 100%; gap: 2rem;">
                        <!-- Summary/Objective -->
                        <div class="summary">
                            <h2>SUMMARY</h2>
                            <div class="paragraph" id="resume-summary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>

                        <div class="line" style="width: 100%;"></div>

                        <!-- Education -->
                        <div class="education">
                            <h2>EDUCATION</h2>
                            <div id="resume-education">
                                <div class="flex div">
                                    <div>
                                        <h3>Bachelor of Computer Science</h3>
                                        <h4>ABC University</h4>
                                            <p>
                                                <i class="ri-calendar-fill"></i>
                                                2021 - Ongoing
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="line" style="width: 100%;"></div>

                        <!-- Work Experience -->
                        <div class="work-experience">
                            <h2>WORK EXPERIENCE</h2>
                            <div id="resume-experience">
                                <div class="flex div">
                                    <div>
                                        <h3>Software Engineer</h3>
                                        <h4>XYZ Corp</h4>
                                        <p>
                                            <i class="ri-calendar-fill"></i>
                                            2018 - 2020

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="line" style="width: 100%;"></div>

                         <!-- Skills -->
                         <div class="left-col-inner skills" style="padding: 0;">
                            <h2 style="margin-bottom: 0 !important;">SKILLS</h2>
                            <ul id="resume-skills">
                                <li>HTML</li>
                            </ul>
                        </div>

                        <div class="line" style="width: 100%;"></div>

                        <!-- Languages -->
                        <div class="left-col-inner lang" style="padding: 0;">
                            <h2 style="margin-bottom: 0 !important;">LANGUAGES</h2>
                            <ul id="resume-lang" style="display:flex; gap:5px;">
                                <li>English</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
export let templete3 = `
<div class="resume templete3" id="resume">
        <div class="main-content">
            <div class="flex">
                <div class="row">
                    <div class="col left">
                        <div class="line"></div>

                        <!-- Skills -->
                        <div class="left-col-inner skills">
                            <h2>SKILLS</h2>
                            <ul id="resume-skills">
                                <li>HTML</li>
                            </ul>
                        </div>

                        <div class="line"></div>

                        <!-- Languages -->
                        <div class="left-col-inner lang">
                            <h2>LANGUAGES</h2>
                            <ul id="resume-lang">
                                <li>English</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col right">

                        <!-- Name and Title -->
                        <div>
                            <h1 id="resume-name">John Doe</h1>
                            <h3 class="title" id="resume-title">Web Developer</h3>
                        
                                  <!-- Contact Detail -->
                        <div class="left-col-inner contact">
                            <!-- <h2>CONTACT</h2> -->
                            <div class="detail">
                                <span><i class="ri-phone-fill"></i></span>
                                <a id="resume-phoneno">+92 336 XXXXXXX</a>
                            </div>
                            <div class="detail">
                                <span><i class="ri-mail-fill"></i></span>
                                <a id="resume-email" style="text-overflow: ellipsis; overflow: hidden;">
                                    johndoe@gmail.com
                                </a>
                            </div>
                            <div class="detail">
                                <span><i class="ri-home-4-fill"></i></span>
                                <p id="resume-address" style="text-wrap: wrap;">123 Street, XYZ
                                    road.
                                </p>
                            </div>
                            <div class="detail">
                                <span><i class="ri-link-m"></i></span>
                                <a id="resume-link" style="text-wrap: wrap;">
                                    www.johndoe.com
                                </a>
                            </div>
                        </div>
                        </div>


                        <!-- Summary/Objective -->
                        <div class="summary">
                            <h2>SUMMARY</h2>
                            <div class="paragraph" id="resume-summary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>

                        <div class="line"></div>

                        <!-- Education -->
                        <div class="education">
                            <h2>EDUCATION</h2>
                            <div id="resume-education">
                                <div class="flex div">
                                    <div class="flex-inner">
                                        <h3>Bachelor of Computer Science</h3>
                                        <h4>ABC University</h4>
                                        <p>
                                            <i class="ri-calendar-fill"></i>
                                            2021 - Ongoing
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="line"></div>

                        <!-- Work Experience -->
                        <div class="work-experience">
                            <h2>WORK EXPERIENCE</h2>
                            <div id="resume-experience">
                                <div class="flex div">
                                    <div class="flex-inner">
                                        <h3>Software Engineer</h3>
                                        <h4>XYZ Corp</h4>
                                        <p>
                                            <i class="ri-calendar-fill"></i>
                                            2018 - 2020

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
