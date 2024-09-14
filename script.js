//select profile icon

var profile_icon =  document.querySelector(".profile-icon")
var profile_icon_option = document.querySelector(".profile-icon-option")
var display = 0

profile_icon.addEventListener("click", () => {
    if(display == 1){
        profile_icon_option.style.display = "block"
        display = 0;
    }
    else{
        profile_icon_option.style.display = "none"
        display = 1;
    }
})

//select sidenavbar

var sidenavbar = document.querySelector(".side-navbar")

function shownavbar()
{
    sidenavbar.style.left = "0"
}
function closenavbar()
{
    sidenavbar.style.left = "-60%"
}

//select my profile tag
var my_profile_show = document.querySelector(".my-profile-show")
var my_profile_box = document.querySelector(".my-profile-box")

my_profile_show.addEventListener("click", () => {
    my_profile_box.style.display = "block"
    profile_icon_option.style.display = "none"
})

//select my profile edit box
var my_profile_edit_box = document.querySelector(".my-profile-edit-box")
var personal_details_edit = document.getElementById("show-personal-details")
var my_profile_close = document.querySelector(".my-profile-close")

personal_details_edit.addEventListener("click", () => {
    my_profile_edit_box.style.display = "block"
})

my_profile_close.addEventListener("click", () => {
    my_profile_edit_box.style.display = "none"
})

//select add summary 
var add_summary_btn = document.querySelector(".add-summary-btn")
var add_summary_box = document.querySelector(".add-summary-box")
var summary_close = document.querySelector(".summary-close")

add_summary_btn.addEventListener("click", () => {
    add_summary_box.style.display = "flex"
})

summary_close.addEventListener("click", () => {
   add_summary_box.style.display = "none"
})

//select add education details
var add_qualification_btn = document.querySelector(".add-qualification-btn")
var add_education_box = document.querySelector(".add-education-box")
var close_education_box = document.querySelector(".close-education-box")

add_qualification_btn.addEventListener("click", () => {
    add_education_box.style.display = "flex"
})

close_education_box.addEventListener("click", () => {
    add_education_box.style.display = "none"
})

//select add experience details
var add_experience_btn = document.querySelector(".add-experience-btn")
var add_experience_box = document.querySelector(".add-experience-box")
var close_experience_box = document.querySelector(".close-experience-box")

add_experience_btn.addEventListener("click", () => {
    add_experience_box.style.display = "flex"
})

close_experience_box.addEventListener("click", () => {
    add_experience_box.style.display = "none"
})

//select add project details
var add_projects_btn = document.querySelector(".add-projects-btn")
var add_projects_box = document.querySelector(".add-projects-box")
var close_projects = document.querySelector(".projects-close")

add_projects_btn.addEventListener("click", () => {
    add_projects_box.style.display = "flex"
})

close_projects.addEventListener("click", () => {
    add_projects_box.style.display = "none"
})

//select Areas of Interest details
var add_skills_btn = document.querySelector(".add-skills-btn")
var add_areas_of_interest_box = document.querySelector(".add-areas-of-interest-box")
var areas_of_interest_close = document.querySelector(".areas-of-interest-close")

add_skills_btn.addEventListener("click", () => {
    add_areas_of_interest_box.style.display = "grid"
})

areas_of_interest_close.addEventListener("click", () => {
    add_areas_of_interest_box.style.display = "none"
})

//select certifications details
var add_certifications_btn = document.querySelector(".add-certifications-btn")
var add_certifications_box = document.querySelector(".add-certifications-box")
var close_certifications_box = document.querySelector(".close-certifications-box")

add_certifications_btn.addEventListener("click", () => {
    add_certifications_box.style.display = "flex"
})

close_certifications_box.addEventListener("click", () => {
    add_certifications_box.style.display = "none"
})


var change_password_box_show = document.querySelector(".change-password-box-show")
var change_password_box = document.querySelector(".change-password-box")
var close_change_password = document.querySelector(".close-change-password")

change_password_box_show.addEventListener("click", () => {
    change_password_box.style.right = "0"
    profile_icon_option.style.display = "none"
})

close_change_password.addEventListener("click", () => {
    change_password_box.style.right = "-70%"
})
