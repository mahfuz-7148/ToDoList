const inputBox = document.getElementById("inputBox");
const ListContainer = document.getElementById("ListContainer");

document.getElementById("addTask").addEventListener('click', () => {
  if (!inputBox.value.trim()) {
    alert("You must write something!!");
  } else {
    let li = document.createElement("li");
    li.className = "flex items-center justify-between rounded-lg";
    li.innerHTML = `
                    <span class='font-medium text-xl bg-blue-300 px-4 py-2 rounded-lg'>${inputBox.value}</span>
                    <span class="gap-5">
                        <button class="edit text-white px-4 py-2 rounded-lg hover:bg-slate-200 cursor-pointer"><img class = 'edit' src="edit.png" alt=""></button>
                        <button class="delete text-white px-4 py-2 rounded-lg hover:bg-slate-200 cursor-pointer"><img class = 'delete'  src="delete.png" alt=""></button>
                    </span>`;
    ListContainer.appendChild(li);
    inputBox.value = "";
    saveData();
  }
})

ListContainer.addEventListener("click", (ev) => {
  let li = ev.target.closest("li");
  if (!li) return;
   if (ev.target.classList.contains("delete")) {
    li.remove();
    saveData();
  } else if (ev.target.classList.contains("edit")) {
    let text = li.querySelector("span").textContent;
    li.innerHTML = `<input value="${text}" type="text" class="editInput flex-1 p-2 border mr-3 rounded-lg focus:ring-2 focus:ring-blue-500"><span><button class="save text-white px-4 py-2 rounded-lg hover:bg-slate-200 cursor-pointer"><img class="save" src="floppy-disk.png"></button><button class="delete text-white px-4 py-2 rounded-lg hover:bg-slate-200 cursor-pointer"><img class="delete" src="delete.png"></button></span>`;
  } else if (ev.target.classList.contains("save")) {
    let newText = li.querySelector(".editInput").value.trim();
   
      li.innerHTML = `<span class='font-medium text-xl bg-blue-300 px-4 py-2 rounded-lg'>${newText}</span><span class="gap-5"><button class="edit text-white px-4 py-2 rounded-lg hover:bg-slate-200 cursor-pointer"><img class="edit" src="edit.png"></button><button class="delete text-white px-4 py-2 rounded-lg hover:bg-slate-200 cursor-pointer"><img class="delete" src="delete.png"></button></span>`;
    saveData();
  }
});
