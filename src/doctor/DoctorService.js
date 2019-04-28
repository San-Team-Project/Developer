import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class DoctorService{

  getDoctors(){
      console.log("Get Doctors!!")
    const url = `${API_URL}/api/doctorr`;
    return axios.get(url).then(response => response.data);
  }

  getDoctorByURL(link){
    const url = `${API_URL}${link}`;
    return axios.get(url).then(response => response.data);
  }

  getDoctor(pk){
    const url = `${API_URL}/api/doctorr/${pk}`;
    return axios.get(url).then(response => response.data);
  }

  deleteDoctor(doctor){
    const url = `${API_URL}/api/doctorr/${doctor.pk}`;
    return axios.delete(url);
  }

  createDoctor(doctor){
    const url = `${API_URL}/api/doctorr/`;
    return axios.get(url,doctor);
  }

  updateDoctor(doctor){
    const url = `${API_URL}/api/doctorr/${doctor.pk}`;
    return axios.put(url, doctor)

  }
}