const app = document.getElementById('app');
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

random_image_button.addEventListener('click', async () => {
  // Get the image element
  const image_element = document.getElementById('image-element');
  const random_image_response = await fetch('https://source.unsplash.com/random/1920x1080/?nature');
  const random_image_response_url = random_image_response.url;
  image_element.src = random_image_response_url;
});

input_upload_image.addEventListener('change', handleFiles, false);

function handleFiles() {
  const file_list = this.files;
  const file_uploaded = file_list[0];
  const file_url = URL.createObjectURL(file_uploaded);
  const image_element = document.getElementById('image-element');
  image_element.src = file_url;
  popup.classList.add('hidden');
}



