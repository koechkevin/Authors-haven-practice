import config from '../config';

const { CLOUD_NAME, UPLOAD_PRESET } = config;

export default (upload) => {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
  const xhr = new XMLHttpRequest();
  const fd = new FormData();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.upload.addEventListener('progress', upload.progress);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      upload.onSuccess(response.secure_url);
    }
  };

  fd.append('upload_preset', UPLOAD_PRESET);
  fd.append('file', upload.image);
  xhr.send(fd);
};
