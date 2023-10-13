const translateElements = (elements, newText) => {
  if (typeof newText === 'string') {
    elements.forEach((element) => {
      element.innerHTML = newText;
    });
  } else if (Array.isArray(newText) && elements.length === newText.length) {
    elements.forEach((element, i) => {
      element.innerHTML = newText[i];
    });
  } else {
    throw new Error('Invalid arguments: newText must be a string or an array with the same length as elements.');
  }
};

const translateElement = (element, newText) => {
  element.innerHTML = newText;
};

const translatePlaceHolder = (element, newText) => {
  element.placeholder = newText;
};

const translateHeader = () => {
  const aboutMeElements = document.querySelectorAll('.about-me');
  const myWorkElements = document.querySelectorAll('.my-work');
  const contactElements = document.querySelectorAll('.contact');

  translateElements(aboutMeElements, 'About me');
  translateElements(myWorkElements, 'My work');
  translateElements(contactElements, 'Contact');
};

const translateHome = () => {
  const homeElement = document.querySelector('#home-text');
  const exploreProjectsElement = document.querySelector('#explore-projects');

  translateElement(homeElement, `Hi, I'm <span class="text-accent">Rutger</span> from the<br />Netherlands`);
  translateElement(exploreProjectsElement, 'Explore my projects');
};

const translateAboutMe = () => {
  const aboutMeTitleElement = document.querySelector('#about-me h1');
  const aboutMeTextElements = document.querySelectorAll('#about-me p');

  translateElement(aboutMeTitleElement, 'What can I do?');
  translateElements(aboutMeTextElements, [
    'My name is Rutger Pronk, and I am currently studying to become a Software Developer in the Netherlands. I am currently a first year student at ROC Nijmegen.',
    'I have a strong passion for programming and software development, with a dedicated focus on improving my skills in Java and C#. Additionally, I am actively learning both front-end and back-end web development.',
  ]);
};

const translateMyWork = () => {
  const myWorkTitleElement = document.querySelector('#my-work h1');
  const myWorkTextElement = document.querySelector('#my-work p');
  const myWorkProjectTitle = document.querySelector('#my-work-projects-title');

  const myWorkGoToGithub = document.querySelectorAll('.go-to-github');

  const autoclickerTitle = document.querySelector('#autoclicker-title');
  const autoclickerExplanation = document.querySelector('#autoclicker-explanation');

  const travelAgencyTitle = document.querySelector('#travel-agency-title');
  const travelAgencyExplanation = document.querySelector('#travel-agency-explanation');

  const noTimeToDieTitle = document.querySelector('#no-time-to-die-title');
  const noTimeToDieExplanation = document.querySelector('#no-time-to-die-explanation');

  const myWorkExperiencesTitle = document.querySelector('#my-work-experience-title');
  const myWorkExperiencesTime2022 = document.querySelector('#my-work-experiences-times-2022');
  const myWorkExperiencesTimeFuture = document.querySelector('#my-work-experiences-times-future');
  const myWorkExperiencesExplanationContinue = document.querySelector('#my-work-experiences-explanation-continue');
  const myWorkExperiencesExplanationStudent = document.querySelector('#my-work-experiences-explanation-student');
  const myWorkExperiencesExplanationInternGemini = document.querySelector('#my-work-experiences-explanation-intern-gemini');

  const myWorkExperiencesLocationFuture = document.querySelector('#my-work-experiences-location-continue');
  const myWorkExperiencesLocationStudent = document.querySelector('#my-work-experiences-location-student');
  const myWorkExperiencesLocationInternGemini = document.querySelector('#my-work-experiences-location-intern-gemini');

  translateElement(myWorkTitleElement, 'What can I do?');
  translateElement(
    myWorkTextElement,
    'I enjoy working with Java, C#, and web development (HTML, CSS, JavaScript, PHP, SQL). I have collaborated on projects, improving teamwork and communication skills. I use Git/GitHub for version control and Scrum/Trello for project management. Here are some notable projects showcasing my skills.'
  );
  translateElement(myWorkProjectTitle, 'My work');
  translateElements(myWorkGoToGithub, 'Visit Github repo');
  translateElement(autoclickerTitle, 'Useful Autoclicker');
  translateElement(
    autoclickerExplanation,
    "A GUI project in development. Originally created in Java, it is now being rewritten in C#. this autoclicker tool is a project that I've been working on for the past half year."
  );
  translateElement(travelAgencyTitle, 'Travel Agency');
  translateElement(
    travelAgencyExplanation,
    'A project utilizing HTML, CSS, Tailwind CSS, PHP, MySQL, and API integration. I collaborated with another developer for three months to develop this travel agency website.'
  );
  translateElement(noTimeToDieTitle, 'No Time To Die');
  translateElement(
    noTimeToDieExplanation,
    'A project utilizing HTML, CSS, Tailwind CSS, PHP, MySQL, and API integration. I collaborated with another developer for three months to develop this travel agency website.'
  );

  translateElement(myWorkExperiencesTitle, 'My experiences');
  translateElement(myWorkExperiencesTimeFuture, 'Future');
  translateElement(myWorkExperiencesExplanationContinue, 'Pursuing career');
  translateElement(myWorkExperiencesExplanationStudent, 'Student Software Developer');
  translateElement(myWorkExperiencesExplanationInternGemini, 'Intern learning embedded');

  translateElement(myWorkExperiencesTime2022, '2022 - Present');
  translateElement(myWorkExperiencesLocationFuture, 'Another School - HBO');
  translateElement(myWorkExperiencesLocationStudent, 'ROC Nijmegen Technovium - MBO');
  translateElement(myWorkExperiencesLocationInternGemini, 'Gemini Embedded Technologies');
};

const translateContact = () => {
  const contactTitleElement = document.querySelector('#contact h1');
  const contactTextElement = document.querySelector('#contact-text');
  const contactTextEmailCopyElement = document.querySelector('#copy-mail-succes');

  const contactFormTitleElement = document.querySelector('#contact-form-title');
  const contactFormButtonElement = document.querySelector('#contact-form-button');
  const contactFormWarningElement = document.querySelector('#contact-form-warning');

  const contactFormInputName = document.querySelector('#contact-form-name');
  const contactFormInputEmail = document.querySelector('#contact-form-email');
  const contactFormInputSubject = document.querySelector('#contact-form-subject');
  const contactFormInputMessage = document.querySelector('#contact-form-message');

  translateElement(contactTitleElement, 'Talk to me');
  translateElement(contactTextElement, 'Do not hesitate to contact me through the form here or by direct email on.');
  translateElement(contactTextEmailCopyElement, 'Email copied!');

  translateElement(contactFormTitleElement, 'Send me a message');
  translatePlaceHolder(contactFormInputName, 'Name');
  translatePlaceHolder(contactFormInputEmail, 'Email');
  translatePlaceHolder(contactFormInputSubject, 'Subject');
  translatePlaceHolder(contactFormInputMessage, 'Message');
  translateElement(contactFormButtonElement, 'Send message');
  translateElement(contactFormWarningElement, 'In construction');
};

const translate = () => {
  translateHeader();
  translateHome();
  translateAboutMe();
  translateMyWork();
  translateContact();
};

// const urlInfo = window.location.href;
// const isCom = urlInfo.indexOf('.com') !== -1;

// if (isCom) {
//   translate();
// }
