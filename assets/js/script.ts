import { templete1, templete2, templete3 } from "./templetes.js";

document.addEventListener('keydown', function(event) {
  if (event.key === 'Tab' || event.keyCode === 9) {
    event.preventDefault(); // Disable the Tab key
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const templates: { templete1: string; templete2: string; templete3: string } =
    {
      templete1: templete1,
      templete2: templete2,
      templete3: templete3,
    };

  const resumeContainer = document.querySelector(
    ".resume-container"
  ) as HTMLElement;

  const changeButton = document.querySelector(".change") as HTMLElement;
  const selectContainer = document.querySelector(
    ".selectcontainer"
  ) as HTMLElement;

  if (changeButton && selectContainer) {
    changeButton.addEventListener("click", () => {
      selectContainer.style.display = "flex";
    });
  }

  if (selectContainer) {   
    selectContainer.addEventListener("click", () => {
        selectContainer.style.display = "none";
    });
}
  const templateImages = document.querySelectorAll(".selectcontainer img");

  interface Resume {
    firstname: string;
    lastname: string;
    designation: string;
    address: string;
    link: string;
    email: string;
    phoneno: string;
    summary: string;
    skillsElements: string;
    langElements: string;
    educationElements: string;
    experienceElements: string;
  }

  const nameElement: HTMLElement | null =
    document.getElementById("resume-name");

  function nameColor() {
    if (nameElement) {
      const text: string = nameElement.textContent || "";
      const words: string[] = text.split(" ");
      const first: string = words[0];
      const rest: string = words.slice(1).join(" ");

      const changeColor = `<span style="color: #242424de;">${first}</span>`;

      nameElement.innerHTML = `${changeColor} ${rest}`;
    }
  }

  if (nameElement) {
    nameColor();
  }

  const hamburger = document.getElementById("hamburger") as HTMLElement;
  const navLinks = document.getElementById("navLinks") as HTMLElement;
  const overlay = document.getElementById("overlay") as HTMLElement;
  const nextButton = document.getElementById("next-btn") as HTMLButtonElement;
  const prevButton = document.getElementById("prev-btn") as HTMLButtonElement;
  const showResume = document.getElementById(
    "show-resume"
  ) as HTMLButtonElement;
  const edit = document.getElementById("edit") as HTMLButtonElement;
  const slides = document.querySelectorAll(".form-slide");
  const progressSegments = document.querySelectorAll(
    ".progress-segment"
  ) as NodeListOf<HTMLDivElement>;
  const resumeForm = document.getElementsByClassName(
    "resume-form"
  )[0] as HTMLElement;
  const previewContainer = document.getElementsByClassName(
    "preview-container"
  )[0] as HTMLElement;
  let currentSlideIndex: number = 0;
  let educationIndex = 1;
  let workIndex = 1;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  overlay.addEventListener("click", () => {
    navLinks.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  document.getElementById("current-year")!.textContent =
    new Date().getFullYear() as unknown as string;

  function showDialog(message: string) {
    const dialogWrapper = document.createElement("div");
    dialogWrapper.classList.add("dialog-wrapper");
    const dialog = document.createElement("div");
    dialog.classList.add("dialog");
    dialog.innerHTML = `
      <div class="dialog-content">
        <p>${message}</p>
        <button class="dialog-close">OK</button>
      </div>
    `;
    dialogWrapper.appendChild(dialog);
    document.body.appendChild(dialogWrapper);
  
    const closeButton = dialog.querySelector(".dialog-close") as HTMLButtonElement;
    closeButton.addEventListener("click", () => {
      dialogWrapper.remove();
    });
  }

  nextButton.addEventListener("click", () => {
    if (validateCurrentSlide()) {
      if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        updateSlidePosition();
      }
    } else {
      showDialog("Please fill out all fields in this section.");
    }
  });


  function validateCurrentSlide() {
    const currentSlide = slides[currentSlideIndex];
    const inputFields = currentSlide.querySelectorAll(
      ".section input, .section textarea"
    ) as any;

    for (let field of inputFields) {
      const element = field as HTMLInputElement | HTMLTextAreaElement;

      if (
        element.classList.contains("skills") ||
        element.classList.contains("languages")
      ) {
        continue;
      }

      if (!element.value.trim()) {
        return false;
      }
    }
    return true;
  }

  prevButton.addEventListener("click", () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      updateSlidePosition();
    }
  });

  function updateSlidePosition() {
    slides.forEach((slide: any, index) => {
      slide.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    });

    prevButton.style.visibility = currentSlideIndex > 0 ? "visible" : "hidden";

    if (currentSlideIndex === slides.length - 1) {
      nextButton.style.display = "none";
      showResume.style.display = "block";
    } else {
      nextButton.style.display = "block";
      showResume.style.display = "none";
    }

    progressSegments.forEach((segment, index) => {
      if (index <= currentSlideIndex) {
        segment.classList.add("active");
      } else {
        segment.classList.remove("active");
      }
    });
  }

  updateSlidePosition();

  const educationCol = document.getElementById(
    "repeat-col-education"
  ) as HTMLElement;
  const addEducationBtn = document.getElementById(
    "add-btn-education"
  ) as HTMLButtonElement;

  function attachEducationInputEvents() {
    educationCol.querySelectorAll("input").forEach((input) => {
      input.addEventListener("keyup", (e) => {
        text();
      });
    });
  }

  attachEducationInputEvents();

  addEducationBtn.addEventListener("click", () => {
    if (validateCurrentSlide()) {
      duplicateSection(educationCol, "education", educationIndex++);
      attachEducationInputEvents();
    } else {
      showDialog("Please fill out all fields in this section.");
    }
  });

  const workCol = document.getElementById("repeat-col-work") as HTMLElement;
  const addWorkBtn = document.getElementById(
    "add-btn-work"
  ) as HTMLButtonElement;

  function attachWorkInputEvents() {
    workCol.querySelectorAll("input").forEach((input) => {
      input.addEventListener("keyup", (e) => {
        text();
      });
    });
  }

  attachWorkInputEvents();

  addWorkBtn.addEventListener("click", () => {
    if (validateCurrentSlide()) {
      duplicateSection(workCol, "work", workIndex++);
      attachWorkInputEvents();
    } else {
      showDialog("Please fill out all fields in this section.");
    }
  });

  function duplicateSection(
    container: HTMLElement,
    type: string,
    index: number
  ) {
    const newCol = container.firstElementChild!.cloneNode(true) as HTMLElement;

    newCol.querySelectorAll("input").forEach((input) => {
      (input as HTMLInputElement).value = "";
    });

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "-";
    closeBtn.classList.add("close-btn");

    closeBtn.addEventListener("click", () => {
      const id = `${type}-${index}`;
      newCol.remove();
      removeResumeSection(id);
    });

    newCol.appendChild(closeBtn);
    container.appendChild(newCol);
  }

  function removeResumeSection(id: string) {
    const resumeEntry = document.getElementById(id) as HTMLElement;
    if (resumeEntry) {
      resumeEntry.remove();
    }
  }

  const textFields = [
    "firstName",
    "lastName",
    "designation",
    "phoneno",
    "email",
    "Address",
    "link",
    "summary",
    "skills",
    "lang",
    "institute",
    "field",
    "peroid",
    "company",
    "designation",
    "duration",
  ];
  textFields.forEach((id) => {
    document.getElementById(id)?.addEventListener("keyup", text);
  });

  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const skillsContainer = document.createElement("div");
  skillsContainer.classList.add("tags-container");
  skillsInput.insertAdjacentElement("afterend", skillsContainer);

  const langInput = document.getElementById("lang") as HTMLInputElement;
  const langContainer = document.createElement("div");
  langContainer.classList.add("tags-container");
  langInput.insertAdjacentElement("afterend", langContainer);

  let skillsArray: string[] = [];
  let langArray: string[] = [];

  skillsInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const skill = skillsInput.value.trim();
      if (
        skill &&
        (!skillsArray.includes(skill.toLowerCase()) ||
          !skillsArray.includes(skill.toUpperCase()))
      ) {
        skillsArray.push(skill.toUpperCase());
        displaySkills();
        skillsInput.value = "";
      }
    }
  });

  langInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const language = langInput.value.trim();
      if (
        language &&
        (!langArray.includes(language.toLocaleLowerCase()) ||
          !langArray.includes(language.toUpperCase()))
      ) {
        langArray.push(language.toUpperCase());
        displayLanguages();
        langInput.value = "";
      }
    }
  });

  function displaySkills() {
    skillsContainer.innerHTML = skillsArray
      .map(
        (skill, index) =>
          `<p class="tag">${skill} <span class="remove-tag" data-index="${index}">&times;</span></p>`
      )
      .join("");

    skillsContainer.querySelectorAll(".remove-tag").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = (e.target as HTMLElement).getAttribute("data-index");
        if (index !== null) {
          skillsArray.splice(Number(index), 1);
          displaySkills();
        }
      });
    });
  }

  function displayLanguages() {
    langContainer.innerHTML = langArray
      .map(
        (lang, index) =>
          `<p class="tag">${lang} <span class="remove-tag" data-index="${index}">&times;</span></p>`
      )
      .join("");

    langContainer.querySelectorAll(".remove-tag").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = (e.target as HTMLElement).getAttribute("data-index");
        if (index !== null) {
          langArray.splice(Number(index), 1);
          displayLanguages();
        }
      });
    });
  }

  function getSkillsListHTML(): string {
    return skillsArray
      .map((skill) => `<li>${skill.toUpperCase()}</li>`)
      .join("");
  }

  function getLangListHTML(): string {
    return langArray.map((lang) => `<li>${lang.toUpperCase()}</li>`).join("");
  }

  function text(): void {
    const firstName = document.getElementById("firstName") as HTMLInputElement;
    const firstNameText = firstName.value;
    const lastName = document.getElementById("lastName") as HTMLInputElement;
    const lastNameText = lastName.value;
    const designation = document.getElementById(
      "designation"
    ) as HTMLInputElement;
    const designationText = designation.value;
    const address = document.getElementById("Address") as HTMLInputElement;
    const link = document.getElementById("link") as HTMLInputElement;
    const addressText = address.value;
    const email = document.getElementById("email") as HTMLInputElement;
    const emailText = email.value;
    const phoneno = document.getElementById("phoneno") as HTMLInputElement;
    const phonenoText = phoneno.value;
    const summary = document.getElementById("summary") as HTMLTextAreaElement;
    const summaryText = summary.value;
    const educationDOM = showEducation();
    const experienceDOM = showExperience();

    const resume: Resume = {
      firstname: firstNameText,
      lastname: lastNameText,
      designation: designationText,
      address: addressText,
      link: link.value,
      email: emailText,
      phoneno: phonenoText,
      summary: summaryText,
      skillsElements: getSkillsListHTML(),
      langElements: getLangListHTML(),
      educationElements: educationDOM,
      experienceElements: experienceDOM,
    };

    generateResume(resume);
  }

  function showList(val: string): string {
    const arr = val.split(",");
    const res = arr.map(
      (item: string) => `<li> ${item.trim().toUpperCase()} </li>`
    );
    return res.join("");
  }

  function showEducation(): string {
    const educationSections = document.querySelectorAll(
      "#repeat-col-education .col"
    ) as NodeListOf<HTMLElement>;
    let educationList = "";

    educationSections.forEach((section, index) => {
      const institute = section.querySelector(
        'input[id="institute"]'
      ) as HTMLInputElement;
      const field = section.querySelector(
        'input[id="field"]'
      ) as HTMLInputElement;
      const duration = section.querySelector(
        'input[id="peroid"]'
      ) as HTMLInputElement;

      const educationEntry = `
            <div class="flex div" id="education-${index}">
                <div class="flex-inner">
                    <h3>${field.value}</h3>
                    <h4>${institute.value}</h4>
                    <p>
                    <i class="ri-calendar-fill"></i>
                      ${duration.value}
                    </p>
                </div>
            </div>
        `;

      educationList += educationEntry;
    });

    return educationList;
  }

  function showExperience(): string {
    const experienceSections = document.querySelectorAll(
      "#repeat-col-work .col"
    ) as NodeListOf<HTMLElement>;
    let experienceList = "";

    experienceSections.forEach((section, index) => {
      const company = section.querySelector(
        'input[id="company"]'
      ) as HTMLInputElement;
      const designation = section.querySelector(
        'input[id="designation"]'
      ) as HTMLInputElement;
      const duration = section.querySelector(
        'input[id="duration"]'
      ) as HTMLInputElement;

      const experienceEntry = `
            <div class="flex div" id="work-${index}">
                <div class="flex-inner">
                    <h3>${designation.value}</h3>
                    <h4>${company.value}</h4>
                    <p>
                    <i class="ri-calendar-fill"></i>
                    ${duration.value}
                    </p>
                </div>
            </div>
        `;

      experienceList += experienceEntry;
    });

    return experienceList;
  }

  function generateResume(obj: Resume) {
    const resumePhoneno = document.getElementById(
      "resume-phoneno"
    ) as HTMLAnchorElement;
    const resumeEmail = document.getElementById(
      "resume-email"
    ) as HTMLAnchorElement;
    const resumeAddress = document.getElementById(
      "resume-address"
    ) as HTMLElement;
    const resumeLink = document.getElementById(
      "resume-link"
    ) as HTMLAnchorElement;
    const resumeName = document.getElementById("resume-name") as HTMLElement;
    const resumeTitle = document.getElementById("resume-title") as HTMLElement;
    const resumeSummary = document.getElementById(
      "resume-summary"
    ) as HTMLElement;
    const resumeSkills = document.getElementById(
      "resume-skills"
    ) as HTMLElement;
    const resumeLang = document.getElementById("resume-lang") as HTMLElement;
    const resumeEducation = document.getElementById(
      "resume-education"
    ) as HTMLElement;
    const resumeExperience = document.getElementById(
      "resume-experience"
    ) as HTMLElement;

    resumePhoneno.textContent = obj.phoneno;
    resumeEmail.textContent = obj.email;
    resumeEmail.href = `mailto:${obj.email}`;
    resumePhoneno.href = `tel::${obj.phoneno}`;
    resumeAddress.textContent = obj.address;
    resumeLink.textContent = obj.link;
    resumeLink.href = obj.link;
    resumeName.textContent = `${obj.firstname} ${obj.lastname}`;
    resumeTitle.textContent = obj.designation;
    resumeSummary.textContent = obj.summary;
    resumeSkills.innerHTML = obj.skillsElements;
    resumeLang.innerHTML = obj.langElements;
    resumeEducation.innerHTML = obj.educationElements;
    resumeExperience.innerHTML = obj.experienceElements;

    nameColor();
  }

  showResume.addEventListener("click", () => {
    resumeForm.style.display = "none";
    previewContainer.style.display = "flex";
  });
  edit.addEventListener("click", () => {
    resumeForm.style.display = "block";
    previewContainer.style.display = "none";
  });

  function createHTMLElement(htmlString: string): HTMLElement {
    const template = document.createElement("template");
    template.innerHTML = htmlString.trim();
    return template.content.firstChild as HTMLElement;
  }

  function loadTemplate(templateKey: keyof typeof templates) {
    const templateHTML = templates[templateKey];
    const resumeElement = createHTMLElement(templateHTML);

    if (resumeContainer) {
      resumeContainer.innerHTML = "";
      resumeContainer.appendChild(resumeElement);
      text();
    } else {
      console.error("resume-container element not found.");
    }
  }

  templateImages.forEach((image) => {
    image.addEventListener("click", (event) => {
      const templateKey = (event.target as HTMLImageElement).dataset
        .template as keyof typeof templates;
      if (templateKey) {
        loadTemplate(templateKey);
        templateImages.forEach((img) => img.classList.remove("active"));
        image.classList.add("active");
        selectContainer.style.display = "none";
      }
    });
  });

  loadTemplate("templete1");
  templateImages[0].classList.add("active");
});
