// DISCLAIMER!!!!
// - If you're looking through my portfolio to check out my code standard, please check out my most recent projects as this code is now very old and messy.
function scrollToSection(elTag) {
    let section = document.querySelector(elTag);
    let rect = section.getBoundingClientRect();
    document.getElementById("main").scrollTo(rect.x, rect.y);
    console.log({
        section: section,
        rect: rect
    });
}
function projectInfo(id) {
    document.querySelector(".project_info-button").style.display = "block";
    let project = document.getElementById(id);
    project.style.zIndex = 10;
    project.style.pointerEvents = "none";
    project.children[0].classList.add("project_image-active");
    document.querySelector(":root").style.setProperty("--project-img-overlay", "transparent");
    project.lastElementChild.classList.add("project_info-wrap-active");
    let titles = Array.from(document.getElementsByClassName("project_title"));
    titles.forEach((title)=>{
        title.style.zIndex = 1;
    });
    project.children[1].style.display = "none";
    project.style.pointerEvents = "all !important";
}
function projectInfoBack(id) {
    document.querySelector(".project_info-button").style.display = "none";
    let project = document.querySelector(".project_image-active").parentElement;
    project.children[2].style.transition = "clip-path 0s";
    project.style.pointerEvents = "all";
    project.style.zIndex = 0;
    project.lastElementChild.classList.remove("project_info-wrap-active");
    project.children[0].classList.remove("project_image-active");
    let titles = Array.from(document.getElementsByClassName("project_title"));
    titles.forEach((title)=>{
        title.style.zIndex = 10;
    });
    project.children[1].style.display = "grid";
    document.querySelector(":root").style.setProperty("--project-img-overlay", " #0f695488");
    setTimeout(()=>{
        project.children[2].style.transition = "clip-path 2s";
    });
}
function test() {
    console.log("test");
}
function handleFormSubmit(button) {
    // $.ajax({
    //     url: "https://formsubmit.co/ajax/your@email.com",
    //     method: "POST",
    //     data: {
    //         name: "FormSubmit",
    //         message: "I'm from Devro LABS"
    //     },
    //     dataType: "json"
    // });
    let form = button.parentElement;
    console.log(form);
    if (!form.elements[0].value || !form.elements[1].value || !form.elements[2].value || !form.elements[3].value) return;
    form.style.pointerEvents = "none";
    form.style.opacity = "0.75";
    button.style.transform = "scale(0.01)";
    button.style.opacity = "0";
    $.ajax({
        url: "https://formsubmit.co/ajax/harrywgdev@gmail.com",
        method: "POST",
        data: {
            name: form.elements[0].value,
            email: form.elements[1].value,
            _subject: form.elements[2].value,
            message: form.elements[3].value
        },
        dataType: "json",
        success: (data)=>{
            console.log(data);
            document.getElementById("form-success").style.display = "flex";
            form.style = "";
            button.style = "";
            Array.from(form.elements).forEach((el)=>{
                el.value = "";
            });
        },
        error: (err)=>{
            alert("Something went wrong, please contact me at harrywgdev@gmail.com. Apologies for any inconvenience.");
        }
    });
}
function formSuccessBack(button) {
    button.parentElement.style.display = "none";
}

//# sourceMappingURL=index.65f62756.js.map
