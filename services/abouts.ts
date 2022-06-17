import api from './api';

const GetAll = () => {
    return api.get(
      `abouts?populate=*`
    );
};

const AboutServices = {
    GetAll
};
  
export default AboutServices;