<?php

require_once "language.php";

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="<?php echo text('description'); ?>" />
  <title>Rutger Pronk - Portfolio</title>

  <link rel="stylesheet" href="style/main.css" />
  <!-- document icons -->
  <link rel="icon" href="img/website-icon.svg" type="image/svg+xml" />
  <link rel="icon" href="img/website-icon.png" type="image/png" />
</head>

<body>
  <!-- fixed -->
  <a id="to-top-button" class="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-secondary opacity-0 transition-all" href="#home">
    <img class="h-6" src="img/arrow-up-icon.svg" alt="arrow up" />
  </a>

  <div id="background-blur" class="absolute left-0 top-0 -z-10 h-full w-full bg-blur bg-cover bg-center bg-no-repeat blur-background"></div>

  <header class="fixed top-0 z-20 h-24 w-full bg-secondary transition-all duration-500 md:bg-transparent md:backdrop-blur">
    <div class="flex h-full items-center justify-between px-spacing">
      <a class="p-2 duration-150 hover:opacity-70" href="#home">
        <h1><span class="text-accent">R</span>utger</h1>
      </a>
      <!-- normal nav -->
      <nav>
        <ul class="flex gap-x-7">
          <li class="hidden md:block">
            <a class="group p-2" href="#about-me">
              <div class="overflow-hidden text-header duration-300 group-hover:opacity-80">
                <p class="about-me"><?php echo text('aboutMe') ?></p>
                <span class="header-underline block h-[3px] w-full translate-x-[-101%] rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"></span>
              </div>
            </a>
          </li>
          <li class="hidden md:block">
            <a class="group p-2" href="#my-work">
              <div class="overflow-hidden text-header duration-300 group-hover:opacity-80">
                <p class="my-work"><?php echo text('myWork') ?></p>
                <span class="header-underline block h-[3px] w-full translate-x-[-101%] rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"></span>
              </div>
            </a>
          </li>
          <li class="hidden md:block">
            <a class="group p-2" href="#contact">
              <div class="overflow-hidden text-header duration-300 group-hover:opacity-80">
                <p class="contact"><?php echo text('contact') ?></p>
                <span class="header-underline block h-[3px] w-full translate-x-[-101%] rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"></span>
              </div>
            </a>
          </li>
          <?php if ($language == "nl") : ?>
            <li class="hidden md:block">
              <a class="group p-2" href="http://rutgerpronk.com/">
                <div class="overflow-hidden text-header duration-300 group-hover:opacity-80">
                  <img class="inline-block" src="img/language-icon.svg" alt="language-icon" />
                  <p class="inline-block">EN</p>
                  <span class="header-underline block h-[3px] w-full translate-x-[-101%] rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"></span>
                </div>
              </a>
            </li>
          <?php elseif ($language == "en") : ?>
            <li class="hidden md:block">
              <a class="group p-2" href="http://rutgerpronk.nl/">
                <div class="overflow-hidden text-header duration-300 group-hover:opacity-80">
                  <img class="inline-block" src="img/language-icon.svg" alt="language-icon" />
                  <p class="inline-block">NL</p>
                  <span class="header-underline block h-[3px] w-full translate-x-[-101%] rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"></span>
                </div>
              </a>
            </li>
          <?php endif; ?>
          <li class="block md:hidden">
            <button id="dropdown-button" class="group flex h-full w-7 cursor-pointer flex-col items-center justify-center gap-y-[6px]">
              <div class="h-[3px] w-full rounded-xl bg-header transition-all duration-300 group-hover:bg-accent"></div>
              <div class="middle-bar h-[3px] w-full rounded-xl bg-header transition-all duration-300 group-hover:bg-accent"></div>
              <div class="h-[3px] w-full rounded-xl bg-header transition-all duration-300 group-hover:bg-accent"></div>
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- responsive nav -->
    <nav id="responsive-nav" class="max-h-0 overflow-hidden bg-secondary transition-all duration-500">
      <ul class="flex flex-col items-center">
        <li>
          <a class="group block h-fit p-4" href="#about-me">
            <p class="about-me overflow-hidden text-header duration-300 group-focus:text-accent"><?php echo text('aboutMe') ?></p>
          </a>
        </li>
        <li>
          <a class="group block h-fit p-4" href="#my-work">
            <p class="my-work overflow-hidden text-header duration-300 group-focus:text-accent"><?php echo text('myWork') ?></p>
          </a>
        </li>
        <li>
          <a class="group block h-fit p-4" href="#contact">
            <p class="contact overflow-hidden text-header duration-300 group-focus:text-accent"><?php echo text('contact') ?></p>
          </a>
        </li>
        <?php if ($language == "nl") : ?>
          <li>
            <a class="group block h-fit p-4" href="http://rutgerpronk.com/">
              <div class="overflow-hidden text-header duration-300 group-focus:text-accent">
                <img class="inline-block" src="img/language-icon.svg" alt="language-icon" />
                <p class="inline-block">EN</p>
              </div>
            </a>
          </li>
        <?php elseif ($language == "en") : ?>
          <li>
            <a class="group block h-fit p-4" href="http://rutgerpronk.nl/">
              <div class="overflow-hidden text-header duration-300 group-focus:text-accent">
                <img class="inline-block" src="img/language-icon.svg" alt="language-icon" />
                <p class="inline-block">NL</p>
              </div>
            </a>
          </li>
        <?php endif; ?>
      </ul>
    </nav>
  </header>

  <!-- scroll -->
  <main id="home" class="mx-spacing flex min-h-screen flex-col">
    <h2 class="animate-y-md mt-60 text-mobileAroundXl text-text delay-75 xs:text-aroundXl lg:mt-80">&lt;/&gt; Software-Dev</h2>
    <h1 id="home-text" class="animate-y text-mobileXl leading-tight xs:text-xl max-w-[700px]">
      Hallo, ik ben Rutger uit Nederland
    </h1>
    <script src="scripts/highlightRutger.js"></script>


    <div class="animate-y-lg mt-36 delay-300 lg:mt-40 xl:mt-40">
      <a class="w-fit" href="#my-work">
        <p id="explore-projects" class="inline-block text-link text-text">Ontdek mijn projecten</p>
        <img class="ml-1 inline-block" src="img/arrow-down-icon.svg" alt="arrow down" />
      </a>
    </div>

    <div class="bg-transparent"></div>

    <div class="flex-1"></div>

    <div class="animate-fade-in my-14 hidden justify-center delay-1000 md:flex">
      <a class="animate-bounce" href="#about-me">
        <img src="img/arrow-down-icon.svg" alt="arrow down" />
      </a>
    </div>
  </main>

  <section id="about-me" class="mx-spacing py-24 mdlg:py-32">
    <h1>Wie ben ik?</h1>
    <div class="mt-10 flex flex-wrap gap-x-12 gap-y-10 mdlg:flex-nowrap lg:gap-x-24">
      <div class="flex flex-wrap items-center justify-center gap-10 md:flex-shrink-0 mdlg:flex-col mdlg:flex-nowrap">
        <img class="w-full max-w-[20rem] rounded-full bg-secondary sm:h-80 sm:w-80" src="img/personal-photo.webp" alt="personal-photo" />

        <div class="flex flex-row flex-wrap items-center gap-9 aboutMe:flex-col mdlg:flex-row">
          <a class="animate-y-md duration-500" href="https://github.com/Rutger505" target="_blank">
            <img src="img/github-icon.svg" alt="my github" />
          </a>
          <a class="animate-y-md delay-75 duration-500" href="https://www.linkedin.com/in/rutger-pronk-585149273/" target="_blank">
            <img src="img/linkedin-icon.svg" alt="my linkedin" />
          </a>
          <a class="animate-y-md delay-150 duration-500" href="#contact">
            <img src="img/mail-icon.svg" alt="contact" />
          </a>
        </div>
      </div>
      <div class="mt-8 max-w-[572px] flex-shrink delay-150 sm:min-w-[350px]">
        <p class="animate-y-sm">
          Mijn naam is Rutger Pronk en ik studeer momenteel om een software developer te worden. Ik zit momenteel in mijn eerste studiejaar op het ROC Nijmegen.
        </p>
        <p class="animate-y-sm mt-7 delay-75">
          Ik heb een grote passie voor programmeren en softwareontwikkeling, met een specifieke focus op het uitbrijden van mijn kennis in Java en C#. Daarnaast leer ik
          ook zowel front-end als back-end voor websites.
        </p>
      </div>
    </div>
  </section>

  <section id="my-work" class="mx-spacing py-24 mdlg:py-32">
    <h1>Wat kan ik doen?</h1>

    <p class="animate-y-sm mt-10 max-w-[710px]">
      Ik vind het leuk om te werken met Java, C# en websites (HTML, CSS, JavaScript, PHP, SQL). Ik heb samengewerkt met projecten, waarbij ik mijn teamwerk en
      communicatie skills heb verbeterd. Ik maak gebruik van Git/GitHub voor versiebeheer en Scrum/Trello voor projectmanagement. Hier zijn enkele projecten die mijn
      vaardigheden laten zien.
    </p>
    <h2 id="my-work-projects-title" class="animate-y-md mt-10">Mijn werk</h2>
    <div class="mt-10 flex flex-col items-start gap-y-8">
      <div class="animate-y-sm flex h-fit flex-wrap justify-between gap-x-7 rounded-lg bg-secondary px-10 py-10 lg:px-20">
        <div class="flex flex-col items-start">
          <h2 id="autoclicker-title">Useful Autoclicker</h2>
          <p id="autoclicker-explanation" class="mt-5 max-w-[430px]">
            Een GUI-project in development. Oorspronkelijk gemaakt in Java, wordt het nu herschreven in C#. Deze autoclicker-tool is een project waar ik de afgelopen
            zes maanden aan heb gewerkt.
          </p>
          <div class="flex-1"></div>
          <a class="button group mt-5" href="https://github.com/Rutger505/Useful-Autoclicker" target="_blank">
            <p class="go-to-github inline">Ga naar Github repo</p>
            <svg class="inline-block fill-detail group-hover:fill-text" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.64108 20L0 18.3658L16.0982 2.33463H1.32849V0H20.0837V18.677H17.7393V3.96887L1.64108 20Z" fill-opacity="0.702" />
            </svg>
          </a>
        </div>
        <img class="mt-7 max-h-[320px]" src="img/useful-autoclicker-3.0-previeuw.webp" alt="useful autoclicker" />
      </div>
      <div class="animate-y-sm flex h-fit flex-wrap justify-between gap-x-7 rounded-lg bg-secondary px-10 py-10 lg:px-20">
        <div class="flex flex-col items-start">
          <h2 id="travel-agency-title">Reisbureau</h2>
          <p id="travel-agency-explanation" class="mt-5 max-w-[430px]">
            Een project waarbij gebruik wordt gemaakt van HTML, CSS, Tailwind CSS, PHP, MySQL en API-integratie. Ik heb drie maanden samengewerkt met een andere
            ontwikkelaar om deze reisbureau-website te ontwikkelen.
          </p>
          <div class="flex-1"></div>
          <a class="button group mt-5" href="https://github.com/Rutger505/Reisbureau" target="_blank">
            <p class="go-to-github inline">Ga naar Github repo</p>
            <svg class="inline-block fill-detail group-hover:fill-text" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.64108 20L0 18.3658L16.0982 2.33463H1.32849V0H20.0837V18.677H17.7393V3.96887L1.64108 20Z" fill-opacity="0.702" />
            </svg>
          </a>
        </div>
        <img class="mt-7 max-h-[320px]" src="img/reisbureau.webp" alt="useful autoclicker" />
      </div>
      <div class="animate-y-sm flex h-fit flex-wrap justify-between rounded-lg bg-secondary px-10 py-10 lg:px-20">
        <div class="flex flex-col items-start">
          <h2 id="no-time-to-die-title">No Time To Die</h2>
          <p id="no-time-to-die-explanation" class="mt-5 max-w-[430px]">
            A gamejam project, this is a round-based survival game created in just 16 hours using Gamemaker. I collaborated with a team of 5 members to deliver this
            game.
          </p>
          <div class="flex-1"></div>
          <a class="button mt-5" href="https://github.com/Rutger505/Gamejam" target="_blank">
            <p class="go-to-github inline">Ga naar Github repo</p>
            <svg class="inline-block fill-detail group-hover:fill-text" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.64108 20L0 18.3658L16.0982 2.33463H1.32849V0H20.0837V18.677H17.7393V3.96887L1.64108 20Z" fill-opacity="0.702" />
            </svg>
          </a>
        </div>
        <img class="mt-7 max-h-[320px]" src="img/no-time-to-die.webp" alt="useful autoclicker" />
      </div>
    </div>
    <h2 id="my-work-experience-title" class="animate-y-md mt-20">Mijn ervaringen</h2>
    <div class="mt-10 flex">
      <div class="w-2 flex-shrink-0 rounded-full bg-secondary"></div>
      <div class="flex flex-col gap-y-14">
        <div class="ml-[-12px] flex items-start gap-x-10">
          <div class="h-4 w-4 flex-shrink-0 rounded-full bg-accent"></div>
          <div class="flex flex-col gap-2">
            <p id="my-work-experiences-times-future" class="my-work-experiences-times mb-2">Toekomst</p>
            <div>
              <h2 id="my-work-experiences-explanation-continue" class="animate-yleading-tight">Door studeren</h2>
              <p id="my-work-experiences-location-continue" class="animate-y delay-75">Andere School - HBO</p>
            </div>
          </div>
        </div>
        <div class="ml-[-12px] flex items-start gap-x-10">
          <div class="h-4 w-4 flex-shrink-0 rounded-full bg-accent"></div>
          <div class="flex flex-col gap-2">
            <p id="my-work-experiences-times-2022" class="mb-2 text-accent">2022 - Heden</p>
            <div>
              <h2 id="my-work-experiences-explanation-student" class="animate-y leading-tight">Student Software Developer</h2>
              <p id="my-work-experiences-location-student" class="animate-y my-work-experiences-location delay-75">ROC Nijmegen Technovium - MBO</p>
            </div>
            <div>
              <h2 id="my-work-experiences-explanation-intern-gemini" class="animate-y my-work-experiences-explanation leading-tight delay-75">Stage embedded leren</h2>
              <p id="my-work-experiences-location-intern-gemini" class="animate-y my-work-experiences-location delay-150">Gemini Embedded Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="mx-spacing py-24 mdlg:py-32">
    <h1>Neem contact op</h1>
    <div class="flex flex-wrap items-start justify-between gap-7 lg:flex-nowrap">
      <div class="flex flex-wrap items-start justify-start gap-0">
        <div class="animate-y max-w-[750px]">
          <p id="contact-text" class="inline">Voel je vrij om contact met me op te nemen via het formulier hier of rechtstreeks via e-mail op</p>
          <span class="inline-flex">
            <button id="copy-email" class="group relative inline cursor-pointer text-detail underline">
              <p id="copy-email-address">rutger.pronk19@gmail.com</p>
              <div id="copy-mail-succes" class="absolute -top-14 left-7 m-auto -translate-y-5 rounded bg-secondary p-2 text-text opacity-0 transition-all">
                Email gekopieërd!
              </div>
            </button>
            <p>.</p>
          </span>
        </div>
      </div>

      <div class="animate-y-sm flex min-w-[80%] flex-col rounded-lg bg-secondary p-7 delay-300 sm:min-w-[370px]">
        <h2 id="contact-form-title">Stuur me een bericht</h2>
        <input id="contact-form-name" class="mt-6 w-full border-b-2 border-detail bg-transparent px-1 pb-2 text-text outline-none" type="text" placeholder="Naam" />
        <input id="contact-form-email" class="mt-6 w-full border-b-2 border-detail bg-transparent px-1 pb-2 text-text outline-none" type="text" placeholder="Email" />
        <input id="contact-form-subject" class="mt-6 w-full border-b-2 border-detail bg-transparent px-1 pb-2 text-text outline-none" type="text" placeholder="Onderwerp" />
        <textarea id="contact-form-message" class="mt-6 min-h-[120px] w-full border-b-2 border-detail bg-transparent px-1 pb-2 text-text outline-none" type="text" placeholder="Bericht"></textarea>
        <button id="contact-form-button" class="button mt-10">Verstuur bericht</button>
        <p id="contact-form-warning" class="mt-3 text-red">In contructie</p>
      </div>
    </div>
  </section>

  <footer class="flex w-full flex-wrap items-center justify-center gap-x-20 gap-y-8 bg-secondary px-14 py-10 sm:px-20 lg:flex-nowrap">
    <div class="flex gap-x-8">
      <a href="https://github.com/Rutger505" target="_blank">
        <img class="h-8" src="img/github-icon.svg" alt="my github" />
      </a>
      <a href="https://www.linkedin.com/in/rutger-pronk-585149273/" target="_blank">
        <img class="h-8" src="img/linkedin-icon.svg" alt="my linkedin" />
      </a>
      <a href="#contact">
        <img class="h-8" src="img/mail-icon.svg" alt="contact" />
      </a>
    </div>
    <p>© 2023 Rutger Pronk</p>
  </footer>
  <script src="scripts/smoothNavigation.js"></script>
  <script src="scripts/compactHeader.js"></script>
  <script src="scripts/underlineHeader.js"></script>
  <script src="scripts/copyEmail.js"></script>
  <script src="scripts/toTopButton.js"></script>
  <script src="scripts/animateOnScroll.js"></script>
  <script src="scripts/dropdownHeader.js"></script>
  <script src="scripts/backgroundBlur.js"></script>
  <script src="scripts/languageHandeler.js"></script>
</body>

</html>