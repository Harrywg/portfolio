function scrollToSection(elTag) {
    let section = document.querySelector(elTag);
    let rect = section.getBoundingClientRect()
    document.getElementById('main').scrollTo(rect.x, rect.y);
}

function projectInfo(id) {
    document.querySelector('.project_info-button').style.display = "block";
    let project = document.getElementById(id);
    project.style.zIndex = 10;
    project.style.pointerEvents = 'none';
    project.children[0].classList.add('project_image-active')
    document.querySelector(':root').style.setProperty('--project-img-overlay', 'transparent')

    project.lastElementChild.classList.add('project_info-wrap-active')

    let titles = Array.from(document.getElementsByClassName('project_title'));
    titles.forEach((title) => {
        title.style.zIndex = 1;
    })

    project.children[1].style.display = 'none';
    project.style.pointerEvents = 'all !important';
}

function projectInfoBack(id) {
    document.querySelector('.project_info-button').style.display = "none";

    let project = document.querySelector('.project_image-active').parentElement;
    project.children[2].style.transition = 'clip-path 0s';

    project.style.pointerEvents = 'all';
    project.style.zIndex = 0;

    project.lastElementChild.classList.remove('project_info-wrap-active');
    project.children[0].classList.remove('project_image-active')
    let titles = Array.from(document.getElementsByClassName('project_title'));
    titles.forEach((title) => {
        title.style.zIndex = 10;
    })
    project.children[1].style.display = 'grid';
    document.querySelector(':root').style.setProperty('--project-img-overlay', ' #0f695488')
    setTimeout(() => {
        project.children[2].style.transition = 'clip-path 2s';

    })
}

function test() {
    console.log("test")
}