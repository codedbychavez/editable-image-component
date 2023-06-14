const popup = document.getElementById('popup');
const edit_button = document.getElementById('edit-button');
const button_upload_image = document.getElementById('button-upload-image');
const input_upload_image = document.getElementById('input-upload-image');
const random_image_button = document.getElementById('random-image-button');

edit_button.addEventListener('click', () => {
  if (!popup.classList.contains('hidden')) {
    popup.classList.add('hidden');
  } else {
    popup.classList.remove('hidden');
  }
});

button_upload_image.addEventListener('click', () => {
  input_upload_image.click();
});

random_image_button.addEventListener('click', () => {
  // Get the image element
  const image_element = document.getElementById('image-element');
  
});

input_upload_image.addEventListener('change', handleFiles, false);

function handleFiles() {
  const file_list = this.files;
  // TODO: Complete this
  console.log(file_list[0]);
}



