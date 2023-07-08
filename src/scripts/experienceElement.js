let elementCount = 0;

class experienceElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        elementCount++;

        let date = this.getAttribute("date") || "#####";
        let text = this.getAttribute("text") || "#####";

        const rightSide = elementCount % 2 == 0;

        if (rightSide) {
            this.innerHTML = `
                <div class="flex items-center mr-6 gap-x-5 relative justify-center">
					<p id="experience-date-${elementCount}">${date}</p>
                    
				    <div id="experience-line-${elementCount}" class="absolute w-[10px] h-full bg-secondary -z-10 flex items-center just"></div>

					<div class="w-4 h-4 rounded-full bg-accent"></div>

					<div id="experience-text-container-${elementCount}" class="flex my-2">
						<div id="experience-border-${elementCount}" class="border-r-[42px] border-t-transparent border-b-transparent border-r-secondary border-l-transparent"></div>
						<p id="experience-text-${elementCount}" class="p-3 rounded-l bg-secondary w-[230px] h-fit text-text">${text}</p>
					</div>
				</div>
        `;
        } else {
            this.innerHTML = `
                <div class="flex items-center mr-6 gap-x-5 relative justify-center">
                    <div id="experience-text-container-${elementCount}" class="flex my-2">
                        <p id="experience-text-${elementCount}" class="p-3 rounded-l bg-secondary w-[230px] h-fit text-text">${text}</p>
                        <div id="experience-border-${elementCount}" class="border-l-[42px] border-t-transparent border-b-transparent border-l-secondary border-r-transparent"></div>
                    </div>

				    <div id="experience-line-${elementCount}" class="absolute w-[10px] h-full  bg-secondary -z-10 flex items-center just"></div>

                    <div class="w-4 h-4 rounded-full bg-accent"></div>

                    <p id="experience-date-${elementCount}">${date}</p>
                </div>
        `;
        }

        const textElement = document.querySelector(`#experience-text-${elementCount}`);
        const textHeight = textElement.clientHeight;
        const borderSize = textHeight / 2;

        // set correct border size
        const borderElement = document.querySelector(`#experience-border-${elementCount}`);
        borderElement.style.borderWidth = `${borderSize}px`;
        if (rightSide) {
            borderElement.style.marginLeft = `-${borderSize}px`;
        } else {
            borderElement.style.marginRight = `-${borderSize}px`;
        }

        // set correct margin for centering
        const textContainer = document.querySelector(`#experience-text-container-${elementCount}`);
        const dateText = document.querySelector(`#experience-date-${elementCount}`); // where margin whill be applied

        const textContainerWidth = textContainer.clientWidth;
        const dateTextWidth = dateText.clientWidth;

        const margin = textContainerWidth - dateTextWidth;

        if (rightSide) {
            dateText.style.marginLeft = `${margin}px`;
        } else {
            dateText.style.marginRight = `${margin}px`;
        }

        // rounded middle line only at top and bottom
        const lineElement = document.querySelector(`#experience-line-${elementCount}`);
        if (elementCount == 1) {
            lineElement.classList.add("rounded-t-full");
        }
        lineElement.classList.add("rounded-b-full");

        if (elementCount !== 1) {
            const oldLineElement = document.querySelector(`#experience-line-${elementCount - 1}`);
            oldLineElement.classList.remove("rounded-b-full");
        }
    }
}
customElements.define("work-experience", experienceElement);