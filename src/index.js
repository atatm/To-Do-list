import './style.css';

function listOfItems(index, description, isChecked) {
  return `<div class="list-item">
              <input class="check-box" type="checkbox" id="${index}" name="task${index}" value="task"  ${isChecked ? 'checked' : 'uncecked'}>
              <input class="labels ${isChecked ? 'checked' : ''} " id="label-text ${index}" for="task${index}" disabled value="${description}">
            
          </div>
          <div class="material-symbols-outlined vertical-dots" id=dot${index}>&#xe5d4;</div>
          <div class="material-symbols-outlined done-btn" id=done${index}>&#xe876;</div>
          <div class="material-symbols-outlined delete-btn" id=del${index}>&#xe872;</div>
      </li>`;
}
return listOfItems();
