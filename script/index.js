const loadSection=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then((json)=> displayLesson(json.data))
};
const displayLesson=(lessons)=>{
    //1.get the container and empty
 const levelContainer = document.getElementById("level-container")
 levelContainer.innerHTML= "";
 //2.get into every lessons
 for(let lesson of lessons){
    //3.create element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML=`<button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson-${lesson.level_no}</button>

    `;
    //append into container
    levelContainer.append(btnDiv);
 }
}
loadSection();