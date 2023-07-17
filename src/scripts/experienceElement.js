let elementCount = 0;

class ExperienceElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    elementCount++;

    let date = this.getAttribute('date') || '#####';
    let text = this.getAttribute('text') || '#####';

    const rightSide = elementCount % 2 == 0;

    if (rightSide) {
      this.innerHTML = `
        <div class="flex items-center mr-6 gap-x-5 relative justify-center">
					<p class="experience-date">${date}</p>
                    
				    <div class="experience-line absolute w-[10px] h-full bg-secondary -z-10 flex items-center just"></div>

					<div class="w-4 h-4 rounded-full bg-accent"></div>

					<div class="experience-text-container flex my-2">
						<div class="experience-border lg:border-r-[42px] border-t-transparent border-b-transparent border-r-secondary border-l-transparent"></div>
						<p class="experience-text p-3 rounded-l bg-secondary lg:w-[230px] h-fit text-text">${text}</p>
					</div>
				</div>
        `;
    } else {
      this.innerHTML = `
        <div class="flex items-center mr-6 gap-x-5 relative justify-center">
            <div class="experience-text-container flex my-2">
                <p class="experience-text p-3 rounded-l bg-secondary w-[230px] h-fit text-text">${text}</p>
                <div class="experience-border border-l-[42px] border-t-transparent border-b-transparent border-l-secondary border-r-transparent"></div>
            </div>

            <div class="experience-line absolute w-[10px] h-full  bg-secondary -z-10 flex items-center just"></div>

            <div class="w-4 h-4 rounded-full bg-accent"></div>

            <p class="experience-date">${date}</p>
        </div>
        `;
    }
  }
}
customElements.define('work-experience', ExperienceElement);
