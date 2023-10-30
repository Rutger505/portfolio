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
                <p class="about-me"><?php echo text('aboutMeHeader') ?></p>
                <span class="header-underline block h-[3px] w-full translate-x-[-101%] rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"></span>
              </div>
            </a>
          </li>
          <li class="hidden md:block">
            <a class="group p-2" href="#my-work">
              <div class="overflow-hidden text-header duration-300 group-hover:opacity-80">
                <p class="my-work"><?php echo text('myWorkHeader') ?></p>
                <span class="header-underline block h-[3px] w-full translate-x-[-101%] rounded-full bg-accent duration-300 group-hover:translate-x-[-50%]"></span>
              </div>
            </a>
          </li>
          <li class="hidden md:block">
            <a class="group p-2" href="#contact">
              <div class="overflow-hidden text-header duration-300 group-hover:opacity-80">
                <p class="contact"><?php echo text('contactHeader') ?></p>
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
            <p class="about-me overflow-hidden text-header duration-300 group-focus:text-accent"><?php echo text('aboutMeHeader') ?></p>
          </a>
        </li>
        <li>
          <a class="group block h-fit p-4" href="#my-work">
            <p class="my-work overflow-hidden text-header duration-300 group-focus:text-accent"><?php echo text('myWorkHeader') ?></p>
          </a>
        </li>
        <li>
          <a class="group block h-fit p-4" href="#contact">
            <p class="contact overflow-hidden text-header duration-300 group-focus:text-accent"><?php echo text('contactHeader') ?></p>
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
      <?php echo text('landingPageText') ?>
    </h1>
    <script src="scripts/highlightRutger.js"></script>


    <div class="animate-y-lg mt-36 delay-300 lg:mt-40 xl:mt-40">
      <a class="w-fit" href="#my-work">
        <p class="inline-block text-link text-text"><?php echo text('exploreProjects') ?></p>
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
    <h1><?php echo text('aboutMeTitle') ?></h1>
    <div class="mt-24 flex flex-wrap gap-x-12 gap-y-10 mdlg:flex-nowrap lg:gap-x-24">
      <div class="flex flex-wrap items-center justify-center gap-10 md:flex-shrink-0 mdlg:flex-col mdlg:flex-nowrap">
        <img class="w-full max-w-[20rem] rounded-full bg-secondary sm:h-80 sm:w-80" src="img/personal-photo.webp" alt="personal-photo" />

        <div class="flex flex-row flex-wrap items-center gap-9 aboutMe:flex-col mdlg:flex-row">
          <a class="animate-y-md duration-500" href="https://github.com/Rutger505" target="_blank">
            <img class="h-8" src="img/github-icon.svg" alt="my github" />
          </a>
          <a class="animate-y-md delay-75 duration-500" href="https://www.linkedin.com/in/rutger-pronk-585149273/" target="_blank">
            <img class="h-8" src="img/linkedin-icon.svg" alt="my linkedin" />
          </a>
          <a class="animate-y-md delay-150 duration-500" href="#contact">
            <img class="h-8" src="img/mail-icon.svg" alt="contact" />
          </a>
        </div>
      </div>
      <div class="mt-8 max-w-[572px] flex-shrink delay-150 sm:min-w-[350px]">
        <p class="animate-y-sm">
          <?php echo text('aboutMeText1') ?>
        </p>
        <p class="animate-y-sm mt-7 delay-75"><?php echo text('aboutMeText2') ?>
        </p>
      </div>
    </div>
  </section>

  <section id="my-work" class="mx-spacing py-24 mdlg:py-32">
    <h1> <?php echo text('myWorkTitle') ?> </h1>

    <p class="animate-y-sm mt-10 max-w-[710px]"><?php echo text('myWorkText') ?>
    </p>
    <h2 class="animate-y-md mt-24"><?php echo text('myWorkSubtitle') ?></h2>
    <div class="mt-10 flex flex-col items-start gap-y-8">
      <div class="animate-y-sm flex h-fit flex-wrap justify-between gap-x-7 rounded-lg bg-secondary px-10 py-10 lg:px-20">
        <div class="flex flex-col items-start">
          <h2><?php echo text('usefulAutoclickerTitle') ?></h2>
          <p class="mt-5 max-w-[430px]"><?php echo text('usefulAutoclickerText') ?>
          </p>
          <div class="flex-1"></div>
          <a class="button group mt-5" href="https://github.com/Rutger505/Useful-Autoclicker" target="_blank">
            <p class="go-to-github inline"><?php echo text('goToGithub') ?></p>
            <svg class="inline-block fill-detail group-hover:fill-text" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.64108 20L0 18.3658L16.0982 2.33463H1.32849V0H20.0837V18.677H17.7393V3.96887L1.64108 20Z" fill-opacity="0.702" />
            </svg>
          </a>
        </div>
        <img class="mt-7 max-h-[320px]" src="img/useful-autoclicker-3.0-previeuw.webp" alt="useful autoclicker" />
      </div>
      <div class="animate-y-sm flex h-fit flex-wrap justify-between gap-x-7 rounded-lg bg-secondary px-10 py-10 lg:px-20">
        <div class="flex flex-col items-start">
          <h2><?php echo text('travelAgencyTitle') ?></h2>
          <p class="mt-5 max-w-[430px]">
            <?php echo text('travelAgencyText') ?>
          </p>
          <div class="flex-1"></div>
          <a class="button group mt-5" href="https://github.com/Rutger505/Reisbureau" target="_blank">
            <p class="go-to-github inline"><?php echo text('goToGithub') ?></p>
            <svg class="inline-block fill-detail group-hover:fill-text" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.64108 20L0 18.3658L16.0982 2.33463H1.32849V0H20.0837V18.677H17.7393V3.96887L1.64108 20Z" fill-opacity="0.702" />
            </svg>
          </a>
        </div>
        <img class="mt-7 max-h-[320px]" src="img/reisbureau.webp" alt="useful autoclicker" />
      </div>
      <div class="animate-y-sm flex h-fit flex-wrap justify-between gap-x-7 rounded-lg bg-secondary px-10 py-10 lg:px-20">
        <div class="flex flex-col items-start">
          <h2><?php echo text('noTimeToDieTitle') ?></h2>
          <p class="mt-5 max-w-[430px]"><?php echo text('noTimeToDieText') ?>
          </p>
          <div class="flex-1"></div>
          <a class="button mt-5" href="https://github.com/Rutger505/Gamejam" target="_blank">
            <p class="go-to-github inline"><?php echo text('goToGithub') ?></p>
            <svg class="inline-block fill-detail group-hover:fill-text" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.64108 20L0 18.3658L16.0982 2.33463H1.32849V0H20.0837V18.677H17.7393V3.96887L1.64108 20Z" fill-opacity="0.702" />
            </svg>
          </a>
        </div>
        <img class="mt-7 max-h-[320px]" src="img/no-time-to-die.webp" alt="useful autoclicker" />
      </div>
    </div>
    <h2 class="animate-y-md mt-20"><?php echo text('experiencesTitle') ?></h2>
    <div class="mt-10 flex">
      <div class="w-2 flex-shrink-0 rounded-full bg-secondary"></div>
      <div class="flex flex-col gap-y-14">
        <div class="ml-[-12px] flex items-start gap-x-10">
          <div class="h-4 w-4 flex-shrink-0 rounded-full bg-accent"></div>
          <div class="flex flex-col gap-2">
            <p class="my-work-experiences-times mb-2"><?php echo text('experiencesFuture') ?> </p>
            <div>
              <h2 class="animate-y leading-tight"><?php echo text('experiencesFutureStudy') ?></h2>
              <p class="animate-y delay-75"><?php echo text('experiencesFutureStudyLocation') ?></p>
            </div>
          </div>
        </div>
        <div class="ml-[-12px] flex items-start gap-x-10">
          <div class="h-4 w-4 flex-shrink-0 rounded-full bg-accent"></div>
          <div class="flex flex-col gap-2">
            <p class="mb-2 text-accent"><?php echo text('experiencesPresent') ?></p>
            <div>
              <h2 class="animate-y leading-tight"><?php echo text('experiencesROCSoftwareDeveloper') ?></h2>
              <p class="animate-y my-work-experiences-location delay-75"><?php echo text('experiencesROCSoftwareDeveloperLocation') ?></p>
            </div>
            <div>
              <h2 class="animate-y my-work-experiences-explanation leading-tight delay-75"><?php echo text('experiencesGemini') ?></h2>
              <p class="animate-y my-work-experiences-location delay-150"><?php echo text('experiencesGeminiLocation') ?></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="mx-spacing py-24 mdlg:py-32">
    <h1><?php echo text('contactTitle') ?></h1>
    <div class="flex flex-wrap items-start justify-between gap-7 lg:flex-nowrap">
      <div class="flex flex-wrap items-start justify-start gap-0">
        <div class="animate-y max-w-[750px]">
          <p class="inline"><?php echo text('contactText') ?></p>
          <span class="inline-flex">
            <button id="copy-email" class="group relative inline cursor-pointer text-detail underline">
              <p id="copy-email-address">rutger.pronk19@gmail.com</p>
              <div id="copy-mail-succes" class="absolute -top-14 left-7 m-auto -translate-y-5 rounded bg-secondary p-2 text-text opacity-0 transition-all">
                <?php echo text('contactTextEmailCopy') ?>
              </div>
            </button>
            <p>.</p>
          </span>
        </div>
      </div>

      <div class="animate-y-sm flex min-w-[80%] flex-col rounded-lg bg-secondary p-7 delay-300 sm:min-w-[370px]">
        <h2><?php echo text('contactFormTitle') ?></h2>
        <input class="mt-6 w-full border-b-2 border-detail bg-transparent px-1 pb-2 text-text outline-none" type="text" placeholder="<?php echo text('contactFormName') ?>" />
        <input class="mt-6 w-full border-b-2 border-detail bg-transparent px-1 pb-2 text-text outline-none" type="text" placeholder="<?php echo text('contactFormEmail') ?>" />
        <input class="mt-6 w-full border-b-2 border-detail bg-transparent px-1 pb-2 text-text outline-none" type="text" placeholder="<?php echo text('contactFormSubject') ?>" />
        <textarea class="mt-6 min-h-[120px] w-full border-b-2 border-detail bg-transparent px-1 pb-2 text-text outline-none" type="text" placeholder="<?php echo text('contactFormMessage') ?>"></textarea>
        <button class="button mt-10"><?php echo text('contactFormSubmit') ?></button>
        <p class="mt-3 text-red"><?php echo text('contactFormConstruction') ?></p>
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
</body>

</html>